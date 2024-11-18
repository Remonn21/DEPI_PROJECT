import { cn } from "@/lib/utils";
import { LayoutGrid, List } from "lucide-react";

export default function ProductsHeader({
   onViewChange,
   currentView,
   handleSearchChange,
   searchInputs,
}) {
   return (
      <section className="bg-white shadow">
         <div className="container mx-auto flex flex-col justify-between px-4 py-4 md:flex-row">
            <div>
               <input
                  type="text"
                  name="searchQuery"
                  onChange={handleSearchChange}
                  value={searchInputs.searchQuery}
                  placeholder="Search by name"
                  className="w-full min-w-[250] rounded-md border border-gray-200 px-4 py-2 lg:min-w-[500px]"
               />{" "}
            </div>
            <nav className="flex flex-wrap items-center justify-center space-x-4 text-navyBlue md:justify-end">
               <span>Per Page:</span>
               <select
                  name="limit"
                  onChange={handleSearchChange}
                  value={searchInputs.limit}
                  className="rounded border px-2 py-1"
               >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
               </select>
               <span>Sort By:</span>
               <select
                  name="sortBy"
                  onChange={handleSearchChange}
                  value={searchInputs.sortBy}
                  className="rounded border px-2 py-1"
               >
                  <option value="soldUnits">Best Match</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
               </select>

               <span>View:</span>
               <button onClick={() => onViewChange("grid")}>
                  <LayoutGrid
                     className={cn(
                        "size-5 text-black",
                        currentView === "grid" && "text-blue",
                     )}
                  />
               </button>
               <button onClick={() => onViewChange("list")}>
                  <List
                     className={cn(
                        "size-5 text-black",
                        currentView === "list" && "text-blue",
                     )}
                  />
               </button>
            </nav>
         </div>
      </section>
   );
}
