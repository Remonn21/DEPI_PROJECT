import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OfferCard = ({
   title,
   description,
   linkTxt,
   href,
   image,
   textClass,
   textOffset,
   className,
   loading,
}) => {
   let offset = "translate-y-1/4";
   if (textOffset === "top") {
      offset = "";
   }

   return (
      <div
         className={`group relative min-h-[20svh] cursor-pointer overflow-hidden rounded-md bg-navyBlue shadow-md ${className}`}
      >
         <img
            src={image}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading={loading}
         />
         <div className={`absolute inset-0 flex ${offset} justify-start p-4`}>
            <div className={`${textClass ? textClass : "text-white"} `}>
               <h2 className="text-body-sm font-bold">{title}</h2>
               {description && (
                  <p className="mb-2 overflow-hidden text-small-sm font-bold">
                     {description}
                  </p>
               )}
               <Link to={href} className="text-[12px] uppercase underline">
                  {linkTxt}
               </Link>
            </div>
         </div>
      </div>
   );
};

OfferCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string,
   linkTxt: PropTypes.string.isRequired,
   href: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   textClass: PropTypes.string,
   textOffset: PropTypes.string,
   className: PropTypes.string,
};

export default OfferCard;
