import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import BrandLogos from "@/components/BrandLogos";
import { signup } from "@/api/auth.api";
import { useAuth } from "@/hooks/useAuth";
import { loginSuccess } from "@/redux/slice/user.slice";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [number, setNumber] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);

   const { createUser, isLoading, signupResponse, isSignupSuccess } = useAuth();

   const handleSignUp = (e) => {
      e.preventDefault();
      createUser({
         name: name,
         address: "asdasd",
         email: email,
         password: password,
         number: number,
      });
   };

   // useEffect(() => {
   //    dispatch(loginSuccess(signupResponse.data.data.user));
   //    navigate("/");
   // },[signupResponse,user,isSign]);

   useEffect(() => {
      if (user.isAuthenticated) navigate("/", { replace: true });
      if (isSignupSuccess) {
         dispatch(loginSuccess(signupResponse.data.data.newUser));
         navigate("/");
      }
   }, [signupResponse, user, isSignupSuccess]);

   return (
      <>
         <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
               <h2 className="mb-6 text-center text-h4 font-bold">Sign Up</h2>
               <p className="mb-6 text-center text-gray">
                  Create a new account by filling in the details below.
               </p>

               <form className="space-y-6" onSubmit={handleSignUp}>
                  <InputField
                     type="text"
                     placeholder="Full Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <InputField
                     type="email"
                     placeholder="Email Address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <InputField
                     type="text"
                     placeholder="Address"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                  />{" "}
                  <InputField
                     type="text"
                     placeholder="Number"
                     value={number}
                     onChange={(e) => setNumber(e.target.value)}
                  />
                  <InputField
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputField
                     type="password"
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button
                     type="submit"
                     disabled={isLoading}
                     label={`${isLoading ? "Loading..." : "Sign Up"} `}
                  />
               </form>

               <p className="mt-6 text-center text-gray">
                  Already have an account?{" "}
                  <Link to="/login" className="text-Purple hover:underline">
                     Login
                  </Link>
               </p>
            </div>
         </div>
         <BrandLogos />
      </>
   );
}

export default SignUp;
