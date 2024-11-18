import { useEffect, useMemo, useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import { protectedClient } from "@/api/axios.js";
import { useGetCategories } from "@/api/category.api.js";

const AdminDashboard = () => {
   const adminId = "670a45f3dd"; //Admin ID here

   const [formData, setFormData] = useState({
      name: "",
      description: "",
      details: "",
      brand: "",
      quantity: "",
      price: "",
      category_id: "",
      subCategory_id: "",
      discountPrice: "",
      tags: "",
      image_urls: [],
   });

   const { isLoading: isFetchingCategories, results } = useGetCategories();

   const [selectedImages, setSelectedImages] = useState([]);

   const subCategories = useMemo(() => {
      if (!results) return;
      return results.data.categories.map((category) => ({
         [category._id]: category.subCategories.map((subCategory) => ({
            [subCategory._id]: subCategory.name,
         })),
      }));
   }, [results?.data?.categories]);
   console.log(subCategories);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, image_urls: files });

      const imagePreviews = files.map((file) => URL.createObjectURL(file));
      setSelectedImages(imagePreviews);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData();
      data.append("name", formData.name);
      data.append("brand", formData.brand);
      data.append("description", formData.description);
      data.append("details", formData.details);
      data.append("quantity", formData.quantity);
      data.append("price", formData.price);
      data.append("discountPrice", formData.discountPrice);
      data.append("tags", formData.tags);
      data.append("category_id", formData.category_id);
      data.append("subCategory_id", formData.subCategory_id);

      formData.image_urls.forEach((image) => {
         data.append("image_urls", image);
      });

      try {
         const response = await protectedClient.post("/products", data, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });

         if (response.status === 201) {
            alert("Product added successfully");
            setFormData({
               name: "",
               description: "",
               quantity: "",
               price: "",
               discountPrice: "",
               tags: "",
               image_urls: [],
            });
            setSelectedImages([]);
         }
      } catch (error) {
         console.error("There was an error adding the product:", error);
      }
   };

   console.log(formData.category_id);

   return (
      <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
         <h2 className="text-3xl mb-6 font-semibold text-indigo-800">
            Add New Product
         </h2>

         {/* Admin ID */}
         <div className="mb-4">
            <span className="font-semibold text-gray-700">Admin ID: </span>
            <span className="text-indigo-600">{adminId}</span>
         </div>

         <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <InputField
                  type="text"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="text"
                  placeholder="Enter Product details"
                  value={formData.details}
                  onChange={handleInputChange}
                  name="details"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="text"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleInputChange}
                  name="description"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="number"
                  placeholder="Enter product quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  name="quantity"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="number"
                  placeholder="Enter product price"
                  value={formData.price}
                  onChange={handleInputChange}
                  name="price"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="number"
                  placeholder="Enter discount price"
                  value={formData.discountPrice}
                  onChange={handleInputChange}
                  name="discountPrice"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="number"
                  placeholder="Enter product rating (1-5)"
                  value={formData.rating}
                  onChange={handleInputChange}
                  name="rating"
               />
            </div>
            <div className="mb-4">
               <InputField
                  type="text"
                  placeholder="Enter product tags (comma-separated)"
                  value={formData.tags}
                  onChange={handleInputChange}
                  name="tags"
               />
            </div>
            <div>
               <select
                  value={formData.category_id}
                  onChange={handleInputChange}
                  name="category_id"
                  className=""
               >
                  {results &&
                     results.data.categories.map((category) => (
                        <option value={category._id} key={category._id}>
                           {category.name}
                        </option>
                     ))}{" "}
               </select>{" "}
               <select
                  value={formData.category_id}
                  onChange={handleInputChange}
                  name="subCategory_id"
                  className=""
               >
                  {results &&
                     formData.category_id &&
                     subCategories[formData.category_id].map((category) => (
                        <option value={category._id} key={category._id}>
                           {category.name}
                        </option>
                     ))}
               </select>
            </div>
            <div className="mb-6">
               <label className="mb-2 block font-semibold text-gray-700">
                  Upload Images
               </label>
               <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="w-full border border-navyBlue px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               />
               {selectedImages.length > 0 && (
                  <div className="mt-2">
                     <strong>Selected images:</strong>
                     <div className="mt-2 grid grid-cols-2 gap-2">
                        {selectedImages.map((imageSrc, index) => (
                           <img
                              key={index}
                              src={imageSrc}
                              alt={`Preview ${index + 1}`}
                              className="h-24 w-24 rounded border border-gray-300 object-cover"
                           />
                        ))}
                     </div>
                  </div>
               )}
            </div>
            <Button label="Submit Product" type="submit" />
         </form>
      </div>
   );
};

export default AdminDashboard;
