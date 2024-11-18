const FaqPage = () => {
   return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
         <div className="grid w-full max-w-6xl grid-cols-1 gap-8 rounded-lg bg-white p-6 shadow-md md:grid-cols-2">
            <div>
               <h2 className="text-3xl mb-4 font-bold text-gray-800">
                  General Information
               </h2>
               <div className="space-y-4">
                  <div>
                     <h3 className="text-lg font-semibold">
                        Eu dictumst cum at sed euismod condimentum?
                     </h3>
                     <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Euismod sed tristique nulla eros.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold">
                        Magna bibendum est fermentum eros.
                     </h3>
                     <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Euismod sed tristique nulla eros.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold">
                        Odio musakan hac eris conseckin selection?
                     </h3>
                     <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Euismod sed tristique nulla eros.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold">
                        Cras blandi sabara boi velut gua mari?
                     </h3>
                     <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Euismod sed tristique nulla eros.
                     </p>
                  </div>
               </div>
            </div>

            {/* Ask a Question Form */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
               <h2 className="text-2xl mb-4 font-bold text-gray-800">
                  Ask a Question
               </h2>
               <form>
                  <div className="mb-4">
                     <label
                        htmlFor="name"
                        className="block font-semibold text-gray-600"
                     >
                        Your Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="subject"
                        className="block font-semibold text-gray-600"
                     >
                        Subject
                     </label>
                     <input
                        type="text"
                        id="subject"
                        className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="message"
                        className="block font-semibold text-gray-600"
                     >
                        Your Message
                     </label>
                     <textarea
                        id="message"
                        className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
                        rows="4"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="rounded-md bg-pink-500 px-4 py-2 text-white transition-colors hover:bg-pink-600"
                  >
                     Send Mail
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default FaqPage;
