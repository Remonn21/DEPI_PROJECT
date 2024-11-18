import Container from "@/components/Container";
import OrderCompleted from "@/components/Shopping/orderCompleted/OrderCompleted";
import { Header, Paragraph, SpecialHeader } from "@/components/SpecialHeader";
import { Link } from "react-router-dom";

export default function OrderCompletedPage() {
   return (
      <div>
         <SpecialHeader className="py-10 font-Lato">
            <Container>
               <Header className={"font-Lato"}>Order Completed</Header>
               <Paragraph>
                  <Link to="/">Home</Link>.<Link to="">Pages</Link>.
                  <Link to="/shopping-cart" className="text-Purple">
                     Order Completed
                  </Link>
               </Paragraph>
            </Container>
         </SpecialHeader>
         <Container>
            <OrderCompleted />
         </Container>
      </div>
   );
}
