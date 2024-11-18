import { FILTERS } from "@/constant";
import { cn } from "@/lib/utils";

export default function Sidebar() {
   return (
      <aside className="w-full md:w-64">
         <div className="bg-white p-4 shadow">
            <section className="space-y-8">
               {FILTERS.map(({ title, options }) => (
                  <Filter key={title}>
                     <FilterHeader>{title}</FilterHeader>
                     <ul className="space-y-2">
                        {options.map((option) => (
                           <li key={option}>
                              <FilterOption>{option}</FilterOption>
                           </li>
                        ))}
                     </ul>
                  </Filter>
               ))}
            </section>

            <div className="mt-4">
               <input
                  type="text"
                  placeholder="$10.00 - $20000.00"
                  className="w-full rounded-md border border-blue px-3 py-2 text-Purple outline-none placeholder:text-Purple-off/40"
               />
            </div>

            {/* <h2 className="text-lg mb-4 mt-6 font-semibold">Filter By Color</h2>
            <div className="flex flex-wrap gap-2">
               <button className="bg-blue-600 h-6 w-6 rounded-full"></button>
               <button className="bg-orange-500 h-6 w-6 rounded-full"></button>
               <button className="bg-yellow-700 h-6 w-6 rounded-full"></button>
               <button className="bg-green-500 h-6 w-6 rounded-full"></button>
               <button className="bg-purple-600 h-6 w-6 rounded-full"></button>
               <button className="bg-sky-400 h-6 w-6 rounded-full"></button>
            </div> */}
         </div>
      </aside>
   );
}

function Filter({ children, className }) {
   return <div className={cn("text-Purple-off", className)}>{children}</div>;
}

function FilterHeader({ children, className }) {
   return (
      <h4
         className={cn(
            // todo text-body-md not working here 😂 (text-blue overwrite it)
            "mb-4 w-fit border-b border-blue text-body-md font-semibold text-blue",
            className,
         )}
      >
         {children}
      </h4>
   );
}

function FilterOption({ children, className }) {
   return (
      <label className={cn("flex items-center", className)}>
         <input type="checkbox" className="mr-2 selection:text-Purple" />
         {children}
      </label>
   );
}
