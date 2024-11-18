import { useNavigate } from "react-router-dom";
import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "@/redux/slice/wishlist.slice";
import { addToCart } from "@/redux/slice/cart.slice";

export default function ProductList({ products, view }) {
   const navigate = useNavigate();
   const wishlist = useSelector((state) => state.wishlist);
   const dispatch = useDispatch();

   const onWishlist = (product) => dispatch(toggleWishList(product));
   const onAddToCart = (product) =>
      dispatch(addToCart({ ...product, quantity: 1 }));
   const isWishListed = (prodId) => {
      return wishlist.items.find((prod) => prod._id === prodId);
   };

   return (
      <div
         className={
            view === "grid"
               ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
               : "space-y-6"
         }
      >
         {products.map((product) =>
            view === "list" ? (
               <ProductCardList
                  onClick={() => navigate(`/products/${product._id}`)}
                  onWishlist={() => onWishlist(product)}
                  onAddToCart={() => onAddToCart(product)}
                  isWishListed={isWishListed}
                  key={product._id}
                  {...product}
               />
            ) : (
               <ProductCardGrid
                  onClick={() => navigate(`/products/${product._id}`)}
                  onWishlist={() => onWishlist(product)}
                  onAddToCart={() => onAddToCart(product)}
                  isWishListed={isWishListed}
                  key={product._id}
                  {...product}
               />
            ),
         )}
      </div>
   );
}
