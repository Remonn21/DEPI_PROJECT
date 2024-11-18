import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Slider = ({ sliderData }) => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const navigate = useNavigate();

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prev) =>
            prev === sliderData.length - 1 ? 0 : prev + 1,
         );
      }, 7000);
      return () => clearInterval(interval);
   }, [currentSlide, sliderData.length]);

   const handleSlideChange = (slideNum) => {
      setCurrentSlide(slideNum);
   };

   const slideVariants = {
      animate: {
         x: `-${currentSlide * 100}%`, // Shift position based on currentSlide
         transition: { duration: 0.6, ease: "easeInOut" },
      },
   };

   const imageVariants = {
      initial: { scale: 1 },
      animate: {
         scale: [1.2, 1],
         transition: { duration: 0.9, delay: 0.4 },
      },
   };

   const textVariant = {
      enter: { opacity: 0, y: "-100%" },
      center: {
         opacity: 1,
         y: 0,
         transition: { duration: 1.2, delay: 0.3 },
      },
      exit: { opacity: 0, y: -40, transition: { duration: 0.1 } },
   };

   return (
      <div className="relative mx-auto flex h-full w-full flex-col overflow-hidden">
         {/* <AnimatePresence  initial={false}> */}
         <div className="relative mx-auto flex h-full w-full overflow-hidden">
            <motion.div
               className="flex h-full w-full"
               variants={slideVariants}
               animate="animate"
               initial={false}
               style={{ display: "flex", width: `${sliderData.length * 100}%` }} // Dynamic width
            >
               {sliderData.map((slide, index) => (
                  <div
                     key={index}
                     className="h-full min-h-[350px] w-full flex-shrink-0"
                  >
                     <motion.img
                        variants={imageVariants}
                        initial="initial"
                        animate={currentSlide === index ? "animate" : "initial"}
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover md:rounded-md"
                     />
                  </div>
               ))}
            </motion.div>
            <div className="absolute bottom-4 left-1/2 z-20 flex transform gap-3 p-2">
               {sliderData.map((slide, index) => {
                  return (
                     <i
                        key={index}
                        className={`relative size-2 cursor-pointer rounded-full ${index === currentSlide ? "bg-yellow-500" : "bg-white"} `}
                        onClick={() => handleSlideChange(index)}
                     />
                  );
               })}
            </div>
         </div>
         <div className="">
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentSlide}
                  className="w-full flex-shrink-0 rounded-b-xl bg-white p-8 text-black md:absolute md:top-[10%] md:max-w-[50%] md:bg-transparent md:text-white xl:translate-y-[10%]"
               >
                  <div className="space-y-1 md:space-y-6">
                     <motion.h2
                        variants={textVariant}
                        initial={"enter"}
                        animate={"center"}
                        exit="exit"
                        className="text-body-md font-bold md:text-h6 xl:text-h3"
                     >
                        {sliderData[currentSlide].title}
                     </motion.h2>
                     <motion.p
                        variants={textVariant}
                        initial={{ opacity: 0, y: -40 }}
                        animate="center"
                        exit="exit"
                        className="pb-3 text-[1.1rem] font-normal text-gray-800 md:text-gray-300 lg:text-[1.1rem] xl:text-[1.2rem]"
                     >
                        {sliderData[currentSlide].description}
                     </motion.p>
                     <motion.button
                        variants={textVariant}
                        initial={{ opacity: 0 }}
                        animate={{
                           opacity: 1,
                           transition: {
                              duration: 1.2,
                              delay: 0.4,
                           },
                        }}
                        onClick={() => navigate("/products")}
                        className="flex max-w-fit items-center gap-2 rounded-lg bg-navyBlue px-4 py-2 text-[15px] text-white transition duration-300 hover:bg-black hover:text-white md:bg-white md:py-3 md:text-[1.2rem] md:text-black"
                     >
                        <span>Shop now</span> <MoveRight size={16} />
                     </motion.button>
                  </div>
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
};

Slider.propTypes = {
   sliderData: PropTypes.arrayOf(
      PropTypes.shape({
         image: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
      }),
   ).isRequired,
};

export default Slider;
