import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
   const user = useSelector((state) => state.user);
   const navigate = useNavigate();
   useEffect(() => {
      if (user.isAuthenticated === false) {
         navigate("/login");
      }
   }, [user]);

   return <div>MyProfile</div>;
};

export default MyProfile;
