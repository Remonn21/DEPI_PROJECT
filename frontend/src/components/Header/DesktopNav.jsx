import { Link } from "react-router-dom";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const dropdowns = [
   {
      title: "electronics",
      href: "/products?category=electronics",
      links: [
         {
            title: "smart phone",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
         {
            title: "smart awd",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "Fashion",
      href: "/products?category=fashion",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "testing2",
      href: "/products?category=test",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "more",
      href: "/products?category=test",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
];

export default function DesktopNav() {
   return (
      <div className="text-md relative z-50 mx-auto hidden md:flex lg:max-w-[95%] xl:max-w-[90%]">
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <Link
                     to="/"
                     className={`${navigationMenuTriggerStyle()} text-[1.2rem] font-semibold text-gray hover:text-navyBlue`}
                  >
                     Home
                  </Link>
               </NavigationMenuItem>
               {dropdowns.map((item) => (
                  <NavigationMenuItem
                     className="relative z-50"
                     key={item.title}
                  >
                     <NavigationMenuTrigger className="font-semibold text-gray hover:text-navyBlue hover:shadow-md">
                        <Link
                           className="text-[1.2rem] capitalize"
                           to={item.href}
                        >
                           {item.title}
                        </Link>
                     </NavigationMenuTrigger>
                     <NavigationMenuContent className="relative z-50 bg-white">
                        <div className="flex min-w-max items-start">
                           <ul className="grid gap-10 p-4 md:grid-cols-3">
                              {item.links.map((component) => {
                                 return (
                                    <div
                                       className="flex flex-col gap-2"
                                       key={component.title}
                                    >
                                       <h2 className="mb-1 text-body-sm font-semibold">
                                          {component.title}
                                       </h2>
                                       {component.links.map((link) => (
                                          <Link
                                             className="text-small-xl text-gray hover:text-navyBlue"
                                             key={link.title}
                                             to={link.href}
                                          >
                                             {link.title}
                                          </Link>
                                       ))}
                                    </div>
                                 );
                              })}
                           </ul>
                        </div>
                     </NavigationMenuContent>
                     {/* <NavigationMenuViewport /> */}
                  </NavigationMenuItem>
               ))}
               <NavigationMenuItem>
                  <Link
                     to="/about"
                     className={`${navigationMenuTriggerStyle()} text-[1.2rem] font-semibold capitalize text-gray hover:text-navyBlue`}
                  >
                     About
                  </Link>
               </NavigationMenuItem>{" "}
               <NavigationMenuItem>
                  <Link
                     to="/contact"
                     className={`${navigationMenuTriggerStyle()} text-[1.2rem] font-semibold capitalize text-gray hover:text-navyBlue`}
                  >
                     contact us
                  </Link>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link
                     to="/faq"
                     className={`${navigationMenuTriggerStyle()} text-[1.2rem] font-semibold capitalize text-gray hover:text-navyBlue`}
                  >
                     FAQ
                  </Link>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
}
