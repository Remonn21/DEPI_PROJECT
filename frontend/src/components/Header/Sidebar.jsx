import { X } from "lucide-react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Sidebar = ({ onClose }) => {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         exit={{ width: 0 }}
         className="fixed inset-0 z-50 overflow-hidden bg-black/20"
      >
         <div className="min-h-svh max-w-lg bg-white">
            <div className="relative flex gap-3 bg-gray-100 p-4">
               <Button className="bg-navyBlue py-0 text-white">Menu</Button>
               <Button
                  variant="outline"
                  className="text-slate border-navyBlue py-0 text-gray"
               >
                  Categories
               </Button>

               <span
                  onClick={onClose}
                  className="absolute right-5 top-0 translate-y-1/2"
               >
                  <X size={35} />
               </span>
            </div>
            <div className="flex flex-col">
               {/* {links} */}
               <div></div>
            </div>
         </div>
      </motion.div>
   );
};

Sidebar.propTypes = {
   onClose: PropTypes.func.isRequired,
};
export default Sidebar;
