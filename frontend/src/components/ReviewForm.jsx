import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import InputField from "./InputField";
import { useState } from "react";

const ReviewForm = ({ isShown, onOpenChange, onSubmit }) => {
   const [formData, setFormData] = useState({
      rating: 3,
      comment: "",
   });

   const onInputChange = (e) => {
      setFormData((prevData) => ({
         ...prevData,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = () => {
      // handle the validations here
      onSubmit(formData);
      onOpenChange();
   };

   return (
      <Dialog defaultOpen={isShown} open={isShown} onOpenChange={onOpenChange}>
         <DialogContent className="w-full bg-white sm:max-w-[500px]">
            <DialogHeader>
               <DialogTitle>Make a review</DialogTitle>
               <DialogDescription>
                  Make a review for a product you bought.
               </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <div className="flex flex-col items-center gap-4">
                  <label htmlFor="rating" className="text-right">
                     Rating
                  </label>
                  <InputField
                     name="rating"
                     type={"number"}
                     value={formData.rating}
                     onChange={onInputChange}
                     className="w-full"
                  />
               </div>
               <div className="flex flex-col items-center gap-4">
                  <label htmlFor="name" className="text-right">
                     Name
                  </label>
                  <InputField
                     name="comment"
                     type="text"
                     value={formData.comment}
                     onChange={onInputChange}
                     className="w-full"
                  />
               </div>
            </div>
            <DialogFooter>
               <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-navyBlue text-white"
               >
                  submit review
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default ReviewForm;
