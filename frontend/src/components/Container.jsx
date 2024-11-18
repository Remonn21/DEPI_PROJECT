import { cn } from "@/lib/utils";

export default function Container({ children, className }) {
   return (
      <section
         className={cn("container mx-auto max-w-[87.5rem] px-4", className)}
      >
         {children}
      </section>
   );
}
