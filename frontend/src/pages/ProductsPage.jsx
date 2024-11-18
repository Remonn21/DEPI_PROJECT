import ProductsHeader from "@/components/ProdcutsHeader";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { useSearchProducts } from "@/hooks/useProducts";
import { useEffect, useRef, useState } from "react";

const defautValues = {
   searchQuery: "",
   category: "",
   sortOption: "",
   sortOrder: "",
   page: 1,
   limit: 10,
};

export default function ProductsPage() {
   const [view, setView] = useState("grid");
   const [searchInputs, setSearchInputs] = useState(defautValues);
   const [searchState, setSearchState] = useState(undefined);
   const { data: results, isLoading } = useSearchProducts(searchState);
   const firstInit = useRef(true);
   useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const searchQuery = searchParams.get("searchQuery") || "";
      const category = searchParams.get("category") || "";
      const sortOption = searchParams.get("sortOption") || "";
      const sortOrder = searchParams.get("sortOption") || "";
      const page = searchParams.get("page")
         ? Number(searchParams.get("page"))
         : undefined;
      const limit = searchParams.get("limit")
         ? Number(searchParams.get("limit"))
         : undefined;
      setSearchState({
         searchQuery,
         sortOption,
         sortOrder,
         page,
         limit,
         category,
      });
      setSearchInputs({
         searchQuery,
         sortOption,
         sortOrder,
         page,
         limit,
         category,
      });
      firstInit.current = false;
   }, []);

   useEffect(() => {
      if (firstInit.current === true) return;
      const searchTimeout = setTimeout(() => {
         hanldeSearchSubmit();
      }, 1000);

      return () => clearTimeout(searchTimeout);
   }, [searchInputs]);

   const handleSearchInputsChange = (e) => {
      setSearchInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const hanldeSearchSubmit = () => {
      setSearchState({ ...searchInputs });
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set("searchQuery", searchInputs.searchQuery);
      urlParams.set("sortOption", searchInputs.sortOption);
      urlParams.set("sortOrder", searchInputs.sortOrder);
      urlParams.set("page", searchInputs.page || 1);
      urlParams.set("limit", searchInputs.limit || 10);

      const queryString = urlParams.toString();
      window.history.replaceState(null, "", `?${queryString}`);
   };

   return (
      <div className="min-h-screen">
         <ProductsHeader
            onViewChange={setView}
            handleSearchChange={handleSearchInputsChange}
            searchInputs={searchInputs}
            currentView={view}
         />
         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
               <Sidebar />
               {isLoading ? (
                  <p>Loading....</p>
               ) : results?.data.data?.length > 0 ? (
                  <main className="flex-1">
                     <ProductList
                        products={results?.data?.data || []}
                        view={view}
                     />
                  </main>
               ) : (
                  <p>No products found</p>
               )}
            </div>
         </div>
      </div>
   );
}
