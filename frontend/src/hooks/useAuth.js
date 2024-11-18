import { login, signup } from "@/api/auth.api";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useAuth = () => {
   const {
      mutateAsync: loginUser,
      isLoading: isAuthLoading,
      isSuccess: isAuthSuccess,
      isError: isAuthError,
      error: authError,
      data: authResponse,
   } = useMutation(login, {
      onSuccess: (data) => {
         console.log(data);
         toast.info(`welcome back ${data.data.data.user.name}`);
      },
      onError: (error) => {
         toast.error(error.response.data.message);
      },
   });

   const {
      mutateAsync: createUser,
      isLoading: isSignupLoading,
      isSuccess: isSignupSuccess,
      isError: isSignupError,
      data: signupResponse,
   } = useMutation(signup, {
      onSuccess: (data) => {
         console.log(data);
         toast.info(`Signup completed`);
      },
      onError: (error) => {
         toast.error(error.response.data.message);
      },
   });

   return {
      loginUser,
      isLoading: isAuthLoading || isSignupLoading,
      isAuthSuccess,
      isSignupSuccess,
      isAuthError,
      authError,
      createUser,
      isSignupError,
      authResponse,
      signupResponse,
   };
};
