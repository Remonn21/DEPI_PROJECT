import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import BrandLogos from "@/components/BrandLogos";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/redux/slice/user.slice";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { loginUser, isLoading, isAuthSuccess, isError, authResponse } =
      useAuth();
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const handleLogin = (e) => {
      e.preventDefault();
      loginUser({
         email,
         password,
      });
   };

   useEffect(() => {
      if (user.isAuthenticated) navigate("/", { replace: true });
      if (isAuthSuccess) {
         dispatch(loginSuccess(authResponse.data.data.user));
         navigate("/");
      }
   }, [user, isAuthSuccess]);

   return (
      <>
         <div className="my-28 flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
               <h2 className="mb-6 text-center text-h4 font-bold">Login</h2>
               <p className="mb-6 text-center text-gray">
                  Please login using account details below.
               </p>

               <form className="space-y-6" onSubmit={handleLogin}>
                  <InputField
                     type="email"
                     placeholder="Email Address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputField
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="flex justify-start">
                     <a
                        href="#"
                        className="text-md font-semibold text-gray-500 hover:underline"
                     >
                        Forgot Password?
                     </a>
                  </div>

                  <Button
                     type="submit"
                     disabled={isLoading}
                     label={`${isLoading ? "Loading..." : "Sign In"} `}
                  />
               </form>

               <p className="mt-6 text-center text-gray">
                  Don’t have an account?{" "}
                  <Link
                     to="/signup"
                     className="pl-1 font-semibold text-gray-500 hover:underline"
                  >
                     Create account
                  </Link>
               </p>
            </div>
         </div>
         <BrandLogos />
      </>
   );
}

export default Login;
