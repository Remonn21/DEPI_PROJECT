export default function HektoForm() {
   return (
      <section className="bg-Purple-pantone p-8">
         <div className="contact-info">
            <div className="contact-head my-10 flex flex-wrap items-center justify-between">
               <h3 className="text-h6 text-navyBlue">Contact Information</h3>
               <p className="text-grey">
                  Already have an account? <a href="#">Log in</a>
               </p>
            </div>
            <input
               type="text"
               placeholder="Email or Mobile Phone Number"
               className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <div className="check-update my-10 flex items-baseline gap-1">
               <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-3 w-3 rounded"
               />
               <label htmlFor="offers" className="text-gray text-small-md">
                  Keep me up to date on news and excluive offers
               </label>
            </div>
         </div>
         <div className="shipping-address">
            <h3 className="my-10 text-h6 text-navyBlue">Contact Information</h3>
            <div className="name flex gap-5">
               <input
                  type="text"
                  placeholder="First name (optional)"
                  className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
               />
               <input
                  type="text"
                  placeholder="Last name"
                  className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
               />
            </div>
            <input
               type="text"
               placeholder="Address"
               className="border-grey-dark my-5 w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <input
               type="text"
               placeholder="Apartment,suit,e.t.c (optional)"
               className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <input
               type="text"
               placeholder="city"
               className="border-grey-dark my-5 w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <div className="name flex gap-5">
               <input
                  type="text"
                  placeholder="Bangladesh"
                  className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
               />
               <input
                  type="text"
                  placeholder="Postal Code"
                  className="border-grey-dark w-full border-b-2 bg-transparent pb-3 focus:outline-none"
               />
            </div>
         </div>
         <button className="btn mt-10 bg-pink px-7 py-3 text-white">
            Continue Shipping
         </button>
      </section>
   );
}
