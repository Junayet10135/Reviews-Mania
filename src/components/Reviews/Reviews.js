import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>Review: {reviews.length}</h2>
            {
                reviews.map(review =><Review
                key={review.id}
                review = {review}
                ></Review>
                
                )
            }
        </div>
    );
};

export default Reviews;