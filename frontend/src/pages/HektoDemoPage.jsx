import Container from "@/components/Container";
import HektoDemo from "@/components/Shopping/hektoDemo/HektoDemo";
import { Header, SpecialHeader } from "@/components/SpecialHeader";

export default function HektoDemoPage() {
   return (
      <div>
         <SpecialHeader className="py-10 font-Lato">
            <Container>
               <Header className={"font-Lato"}>Hekto Demo</Header>
            </Container>
         </SpecialHeader>
         <Container>
            <HektoDemo />
         </Container>
      </div>
   );
}
