import { useMemo, useState } from "react";
import {
   FaFacebookSquare,
   FaHeart,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";
import BrandLogos from "@/components/BrandLogos";
import { useNavigate, useParams } from "react-router-dom";
import { useProductById } from "@/hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cart.slice";
import { toggleWishList } from "@/redux/slice/wishlist.slice";
import { toast } from "sonner";
import ReviewsTab from "@/components/ReviewsTab";

const ProductDetails = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data, isLoading } = useProductById(id);

   const product = useMemo(() => data?.data?.product, [data]);
   const relatedProducts = useMemo(() => data?.data?.relatedProducts, [data]);
   const [activeTab, setActiveTab] = useState("description");
   const [mainImage, setMainImage] = useState(0);

   // const [cart, setCart] = useState([]);
   const dispatch = useDispatch();
   const wishlist = useSelector((state) => state.wishlist);
   const handleMainImageChange = (idx) => {
      if (idx > product.images.length - 1) return;
      setMainImage(idx);
   };

   // const relatedProducts = [
   //    {
   //       id: 1,
   //       name: "Related Product 1",
   //       rating: 4,
   //       price: 20.0,
   //       image: "../../public/images/realated1.jpg",
   //    },
   //    {
   //       id: 2,
   //       name: "Related Product 2",
   //       rating: 5,
   //       price: 25.0,
   //       image: "../../public/images/realated2.jpg",
   //    },
   //    {
   //       id: 3,
   //       name: "Related Product 3",
   //       rating: 5,
   //       price: 25.0,
   //       image: "../../public/images/realated3.jpg",
   //    },
   //    {
   //       id: 4,
   //       name: "Related Product 4",
   //       rating: 5,
   //       price: 25.0,
   //       image: "../../public/images/realated4.jpg",
   //    },
   // ];

   const toggleWishListHandler = (prodcut) => {
      dispatch(toggleWishList(prodcut));
   };

   const addToCartHandler = (product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
      toast.success("added to cart");
   };

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <>
         {/* Toast Notification
         {showToast.show && (
            <div
               className={`fixed right-4 top-4 z-50 rounded-lg p-4 shadow-xl transition-opacity duration-500 ${showToast.type === "cart-add" ? "bg-green text-white" : ""} ${showToast.type === "wishlist-add" ? "bg-blue text-white" : ""} ${showToast.type === "wishlist-remove" ? "bg-red text-white" : ""}`}
            >
               {showToast.message}
            </div>
         )} */}

         <div className="container mx-auto py-8">
            {/* Product Card */}
            <div className="flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg md:flex-row">
               {/* Product Images */}
               <div className="flex w-full flex-col items-center md:w-1/2">
                  <img
                     src={product.images[mainImage]}
                     alt="Main Product"
                     className="mb-4 h-80 w-full rounded-lg object-contain"
                  />
                  <div className="flex space-x-4">
                     {product.images.map((image, idx) =>
                        idx === mainImage ? (
                           ""
                        ) : (
                           <img
                              key={idx}
                              src={image}
                              alt={`Thumbnail ${idx + 1}`}
                              className="h-20 w-20 cursor-pointer rounded-lg shadow-sm transition-all hover:opacity-75"
                              onClick={() => handleMainImageChange(idx)}
                           />
                        ),
                     )}
                  </div>
               </div>

               {/* Product Details */}
               <div className="w-full pl-4 md:w-1/2">
                  <h1 className="text-h4 font-bold">{product.name}</h1>
                  <div className="mt-2 flex items-center space-x-2">
                     <span className="text-yellow">
                        {"★".repeat(Math.round(product.rating))}
                     </span>
                     <span className="text-gray">({product.rating})</span>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                     <span className="text-lg font-semibold text-black line-through">
                        ${product.price}
                     </span>
                     {product.discountPrice && (
                        <span className="text-xl font-bold text-red">
                           ${product.discountPrice}
                        </span>
                     )}
                  </div>
                  <p className="mt-4 text-gray">{product.description}</p>

                  {/* Add to Cart and Wishlist */}
                  <div className="mt-6 flex space-x-4">
                     <button
                        className="rounded-lg bg-navyBlue px-6 py-2 text-white shadow transition hover:bg-navyBlue/75"
                        onClick={() => addToCartHandler(product)}
                     >
                        Add to Cart
                     </button>
                     <button
                        onClick={() => toggleWishListHandler(product)}
                        className={`transition-colors ${
                           wishlist.items.find((prd) => prd._id === product._id)
                              ? "text-red"
                              : "text-black"
                        } text-2xl hover:text-red`}
                     >
                        <FaHeart />
                     </button>
                  </div>

                  <div className="mt-8 flex items-center space-x-4">
                     <div className="flex space-x-3">
                        <a
                           href="#"
                           className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white transition hover:bg-indigo-600"
                        >
                           <FaFacebookSquare />
                        </a>
                        <a
                           href="#"
                           className="flex h-7 w-7 items-center justify-center rounded-full bg-pink text-white transition hover:bg-pink-400"
                        >
                           <FaInstagram />
                        </a>
                        <a
                           href="#"
                           className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white transition hover:bg-indigo-600"
                        >
                           <FaTwitter />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8">
               <div className="flex justify-center space-x-8">
                  {["description", "additional-info", "reviews", "video"].map(
                     (tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`pb-2 transition-colors ${activeTab === tab ? "border-b-2 border-red" : ""}`}
                        >
                           {tab.charAt(0).toUpperCase() +
                              tab.slice(1).replace("-", " ")}
                        </button>
                     ),
                  )}
               </div>

               <div className="mt-4 rounded-md bg-white p-4 shadow-lg">
                  {activeTab === "description" && <p>{product.details}</p>}
                  {activeTab === "additional-info" && (
                     <p>Additional information about the product.</p>
                  )}
                  {activeTab === "reviews" && (
                     <ReviewsTab
                        reviews={product.reviews}
                        orderedByUser={product.orderedByUser}
                        productId={product._id}
                     />
                  )}
                  {activeTab === "video" && (
                     <p>No video available for this product.</p>
                  )}
               </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
               <h2 className="mb-4 text-h5 font-bold">Related Products</h2>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  {relatedProducts.map((relatedProduct) => (
                     <div
                        key={relatedProduct._id}
                        className="relative cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-2xl"
                     >
                        <button
                           className={`transition-colors ${
                              wishlist.items.find(
                                 (prd) => prd._id === relatedProduct._id,
                              )
                                 ? "text-red"
                                 : "text-black"
                           } text-2xl hover:text-red`}
                           onClick={() => toggleWishListHandler(relatedProduct)}
                        >
                           <FaHeart />
                        </button>
                        <img
                           onClick={() =>
                              navigate(`/products/${relatedProduct._id}`)
                           }
                           src={relatedProduct.images[0]}
                           alt={relatedProduct.name}
                           className="mb-4 h-60 w-full object-contain"
                        />
                        <h3 className="text-lg font-semibold">
                           {relatedProduct.name}
                        </h3>
                        <div className="mt-2 flex items-center space-x-2">
                           <span className="text-yellow">
                              {"★".repeat(relatedProduct.rating)}
                           </span>
                           <span className="text-gray">
                              ({relatedProduct.rating})
                           </span>
                        </div>
                        <div className="text-lg mt-2 font-bold">
                           ${relatedProduct.price}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <BrandLogos />
      </>
   );
};

export default ProductDetails;
