import { Link } from "react-router-dom";
import { assets } from "../../public/assets/assets";

const NotfoundPage = () => {
   return (
      <div className="flex min-h-[60svh] flex-col items-center justify-center p-4">
         <div className="text-center">
            <h1 className="text-5xl mb-4 font-bold text-gray-800">
               404 Not Found
            </h1>

            <nav className="mb-8 text-gray-500">
               <a href="/" className="text-blue-500 hover:underline">
                  Home
               </a>
               <span> &gt; </span>
               <a href="/" className="text-blue-500 hover:underline">
                  pages
               </a>
               <span> &gt; </span>
               <span className="text-red-500">404 Not Found</span>
            </nav>

            <div className="mb-8">
               <img
                  src={assets.notFound_img}
                  alt="Construction illustration"
                  className="mx-auto w-full max-w-md"
               />
            </div>

            <p className="text-lg mb-8 text-gray-600">
               Oops! The page you requested was not found!
            </p>

            <Link
               to="/"
               className="rounded-full bg-pink-500 px-6 py-3 text-white transition hover:bg-pink-600"
            >
               Back To Home
            </Link>
         </div>
      </div>
   );
};

export default NotfoundPage;
