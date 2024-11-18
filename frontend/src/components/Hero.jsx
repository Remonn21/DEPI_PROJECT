import Slider from "./Slider";
import OfferCard from "./OfferCard";

const sliderData = [
   {
      title: "Modern Mobile Phones",
      description:
         "Mobile phone technology has advanced rapidly over the years, with various ",
      link: "/",

      image: "https://isotech-demo.myshopify.com/cdn/shop/files/2_ae5cc69e-78af-4aea-9cc7-bb616d558539.png?v=1695797615",
   },
   {
      title: "Galaxy Folding Phones",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae harum quasi eaque iste, quos ducimus eos numquam hic ",
      link: "/",
      image: "https://isotech-demo.myshopify.com/cdn/shop/files/2_f639d039-1b63-405c-ab7d-4561d7871d76.png?v=1696134235",
   },
   {
      title: "Iphonwdasdade",
      description: "Which can vary depending on ....",
      link: "/",
      image: "https://isotech-demo.myshopify.com/cdn/shop/files/2_f639d039-1b63-405c-ab7d-4561d7871d76.png?v=1696134235",
   },
   {
      title: "Galaxy Folding Phones",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae harum quasi eaque iste, quos ducimus eos numquam hic ",
      link: "/",
      image: "https://isotech-demo.myshopify.com/cdn/shop/files/2_f639d039-1b63-405c-ab7d-4561d7871d76.png?v=1696134235",
   },
];
const Hero = () => {
   return (
      <div>
         <div className="grid max-w-full gap-4 md:grid-cols-4 lg:gap-6">
            <div className="sm:min-h[50svh] relative -z-10 min-h-[60svh] rounded-md md:col-span-3 md:row-span-2 lg:max-h-[605px] lg:min-h-max">
               <Slider sliderData={sliderData} />
            </div>
            <OfferCard
               title="Special Discount"
               linkTxt="shop now"
               textOffset="top"
               href="/products"
               className="-z-10 lg:max-h-[280px]"
               description="UP to 50% off"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_14.png?v=1695797658&width=1500"
            />
            <OfferCard
               title="Hot deals"
               linkTxt="shop now"
               textOffset="top"
               className="-z-10 lg:max-h-[280px]"
               href="/products"
               description="UP to 30% off"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_15.png?v=1695797682&width=1500"
            />
         </div>
         <div className="mt-5 grid gap-6 md:grid-cols-3">
            <OfferCard
               title="HomePade Speaker"
               linkTxt="show now"
               href="/products"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
            />
            <OfferCard
               title="Apple iPad"
               linkTxt="show now"
               textClass="text-black"
               href="/products"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_5.png?v=1695813736&width=550"
            />
            <OfferCard
               title="Hero Camera"
               linkTxt="show now"
               href="/products"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_6.png?v=1695813811&width=550"
            />
         </div>
      </div>
   );
};

export default Hero;
