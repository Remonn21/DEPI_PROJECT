import { assets } from "../../public/assets/assets";
import { Link } from "react-router-dom";

function App() {
   return (
      <div className="min-h-screen px-4 py-8">
         <div className="mx-auto mb-12 max-w-6xl rounded-lg bg-white p-8">
            <h2 className="text-3xl mb-4 font-bold text-gray-800">About Us</h2>
            {/* 
            <p className="text-sm mb-8 text-gray-500">
               <Link to="/" className="text-blue-500 hover:underline">
                  Home
               </Link>{" "}
               &gt;
               <Link to="/" className="text-blue-500 hover:underline">
                  pages
               </Link>
               &gt;
               <Link to="/about" className="text-blue-500 hover:underline">
                  About Us
               </Link>
            </p> */}

            <div className="md:flex md:items-center">
               <div className="md:w-1/2">
                  <img
                     src={assets.hero_img}
                     alt="Ecommerce Business"
                     className="w-full rounded-lg shadow-md"
                  />
               </div>
               <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
                  <h3 className="text-2xl mb-4 font-semibold text-gray-800">
                     Know About Our Ecommerce Business, History
                  </h3>
                  <p className="mb-6 text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Maecenas ultricies elit eget felis consequat, ut vulputate
                     mi posuere. Aliquam faucibus dolor sit amet libero
                     tincidunt.
                  </p>
                  <Link
                     to="/contact"
                     className="rounded-md bg-pink-500 px-5 py-2 font-semibold text-white transition hover:bg-pink-600"
                  >
                     Contact Us
                  </Link>
               </div>
            </div>
         </div>

         <div className="mx-auto mb-12 max-w-6xl rounded-lg bg-white p-8">
            <h2 className="text-3xl mb-8 text-center font-bold text-gray-800">
               Our Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
               <div className="text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h4 className="text-lg mb-2 font-semibold text-gray-800">
                     Free Delivery
                  </h4>
                  <p className="text-sm text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
               </div>
               <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-lg mb-2 font-semibold text-gray-800">
                     100% Cash Back
                  </h4>
                  <p className="text-sm text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
               </div>
               <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-lg mb-2 font-semibold text-gray-800">
                     Quality Product
                  </h4>
                  <p className="text-sm text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
               </div>
               <div className="text-center">
                  <div className="text-4xl mb-4">🕐</div>
                  <h4 className="text-lg mb-2 font-semibold text-gray-800">
                     24/7 Support
                  </h4>
                  <p className="text-sm text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-6xl rounded-lg bg-white p-8">
            <h2 className="text-3xl mb-8 text-center font-bold text-gray-800">
               Our Client Say!
            </h2>
            <div className="text-center">
               <img src="" alt="Client" className="mx-auto mb-4 rounded-full" />
               <p className="text-lg mb-2 font-medium text-gray-800">
                  Selina Gomez
               </p>
               <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. This
                  store provides top-notch service and quality products. Highly
                  recommended!
               </p>
            </div>
         </div>
      </div>
   );
}

export default App;
