export default function CartShipping() {
   return (
      <div>
         <h3 className="my-10 text-center text-h6 text-blue-off">
            Calculate Shopping
         </h3>
         <div id="shopping" className="my-8 bg-Purple-pantone p-10">
            <input
               type="text"
               placeholder="address"
               className="border-grey-off w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <input
               type="text"
               placeholder="city"
               className="border-grey-off my-8 w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <input
               type="text"
               placeholder="postal code"
               className="border-grey-off w-full border-b-2 bg-transparent pb-3 focus:outline-none"
            />
            <button className="btn mt-10 w-full bg-pink p-3 text-white">
               Calculate Shipping
            </button>
         </div>
      </div>
   );
}
