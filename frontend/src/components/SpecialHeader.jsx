import { cn } from "@/lib/utils";

export function SpecialHeader({ children, className }) {
   return (
      <div className={cn("text-blue bg-Purple-pantone", className)}>
         {children}
      </div>
   );
}

export function Header({ children, className }) {
   return <h2 className={cn("text-h1", className)}>{children}</h2>;
}

export function Paragraph({ children, className }) {
   return <p className={cn("text-body-md", className)}>{children}</p>;
}
