const ContactPage = () => {
   return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8">
         <div className="w-full max-w-6xl bg-white p-8">
            <div className="mb-8 text-left">
               <h1 className="text-4xl mb-2 font-bold text-gray-800">
                  Contact Us
               </h1>
               <nav className="space-x-4 text-gray-500">
                  <a href="/" className="text-blue-500 hover:underline">
                     Home
                  </a>
                  <span>&gt;</span>
                  <a href="/about" className="text-blue-500 hover:underline">
                     About
                  </a>
                  <span>&gt;</span>
                  <a href="/contact" className="text-blue-500 hover:underline">
                     Contact
                  </a>
               </nav>
            </div>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
               <div>
                  <h2 className="text-2xl mb-4 font-bold text-gray-800">
                     Information About Us
                  </h2>
                  <p className="text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Mattis neque ultrices mattis aliquam, malesuada diam est.
                  </p>
                  <div className="mt-4 flex space-x-2">
                     <span className="h-4 w-4 rounded-full bg-purple-500"></span>
                     <span className="h-4 w-4 rounded-full bg-blue-500"></span>
                     <span className="h-4 w-4 rounded-full bg-pink-500"></span>
                  </div>
               </div>

               <div>
                  <h2 className="text-2xl mb-4 font-bold text-gray-800">
                     Contact Way
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex items-center">
                        <span className="mr-2 h-3 w-3 rounded-full bg-purple-500"></span>
                        Tel: 01211609328
                     </div>
                     <div className="flex items-center">
                        <span className="mr-2 h-3 w-3 rounded-full bg-pink-500"></span>
                        Email: shop@store.com
                     </div>
                     <div className="flex items-center">
                        <span className="bg-green-500 mr-2 h-3 w-3 rounded-full"></span>
                        20 Margaret St, London, UK
                     </div>
                     <div className="flex items-center">
                        <span className="mr-2 h-3 w-3 rounded-full bg-red-500"></span>
                        Support Forum for over 24hr
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
               <div>
                  <h2 className="text-2xl mb-4 font-bold text-gray-800">
                     Get In Touch
                  </h2>
                  <p className="mb-4 text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Mattis neque ultrices tristique amet erat vitae eget dolor
                     los vitae lobortis quis bibendum quam.
                  </p>
                  <form className="grid grid-cols-1 gap-4">
                     <div className="flex space-x-4">
                        <input
                           type="text"
                           placeholder="Your Name"
                           className="w-1/2 rounded-lg border border-gray-300 p-3"
                        />
                        <input
                           type="email"
                           placeholder="Your Email"
                           className="w-1/2 rounded-lg border border-gray-300 p-3"
                        />
                     </div>
                     <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-lg border border-gray-300 p-3"
                     />
                     <textarea
                        placeholder="Type Your Message"
                        className="h-24 w-full rounded-lg border border-gray-300 p-3"
                     ></textarea>
                     <button
                        type="submit"
                        className="text-sm w-32 rounded-lg bg-pink-500 px-4 py-2 text-white"
                     >
                        Send Mail
                     </button>
                  </form>
               </div>

               <div className="flex items-center justify-center">
                  <img
                     src="https://via.placeholder.com/300"
                     alt="Illustration"
                     className="w-full max-w-sm"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactPage;
