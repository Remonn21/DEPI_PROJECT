import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDeatails";
import About from "./pages/About";

import ProductsPage from "./pages/ProductsPage";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import OrderCompletedPage from "./pages/OrderCompletedPage";
import HektoDemoPage from "./pages/HektoDemoPage";
import AdminDashboard from "./pages/AdminDashboard";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import NotfoundPage from "./pages/NotfoundPage";
import MyProfile from "./pages/MyProfile";
import PaymentPage from "./pages/Payment";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products/" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCardPage />} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/order-completed" element={<OrderCompletedPage />} />
            <Route path="/hekto-demo" element={<HektoDemoPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotfoundPage />} />
         </Route>
      </Routes>
   );
}
