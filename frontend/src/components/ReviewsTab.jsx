import { useCreateReview } from "@/api/review.api";
import StarRating from "./StarRating";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewsTab = ({ orderedByUser, reviews, productId }) => {
   const { createReview, isLoading, isSuccess, response } = useCreateReview();
   const [formData, setFormData] = useState({
      rating: 2,
      comment: "asdasda",
   });

   const [userReviews, setUserReviews] = useState(reviews);
   const [reviewInputShown, setReviewInputShown] = useState(false);
   // handle the validations here
   const handleReviewSubmit = () => {
      createReview({
         rating: formData.rating,
         comment: formData.comment,
         product_id: productId,
      });
   };

   useEffect(() => {
      if (isSuccess) setUserReviews([...userReviews, response.data.review]);
   }, [isSuccess]);

   return (
      <div className="flex flex-col">
         <ReviewForm
            isShown={reviewInputShown}
            onOpenChange={() => setReviewInputShown((prevState) => !prevState)}
            onSubmit={handleReviewSubmit}
         />
         <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Reviews</h2>

            {orderedByUser ? (
               <Button
                  disabled={isLoading}
                  className="bg-navyBlue font-semibold text-white hover:bg-navyBlue/90"
                  onClick={() => setReviewInputShown(true)}
               >
                  {isLoading ? "Submitting..." : "Create a review"}
               </Button>
            ) : (
               <p className="pr-2 font-bold">
                  You can&apos;t review a product you didn&apos;t buy
               </p>
            )}
         </div>
         <div>
            {userReviews ? (
               userReviews.map((review) => (
                  <div
                     className="flex flex-col gap-1 border-b-2 border-gray-200 pb-2"
                     key={review._id}
                  >
                     <div className="flex max-w-[450px] flex-col pt-2">
                        <h2 className="font-bold">{review.username}</h2>
                        <StarRating rating={review.rating} />
                     </div>
                     <div className="text-black/85">
                        Reviewed on{" "}
                        <span className="font-bold">
                           {format(review.createdAt, "MMMM dd, yyyy")}
                        </span>
                     </div>
                     <div className="border-radius mt-1 font-semibold">
                        &quot;{review.comment}&quot;
                     </div>
                  </div>
               ))
            ) : (
               <p>No reviews found</p>
            )}
         </div>
      </div>
   );
};

export default ReviewsTab;
