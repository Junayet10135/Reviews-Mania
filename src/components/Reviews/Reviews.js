import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-5xl font-bold mt-8'>Review</h2>
            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>

                    )
                }
            </div>
        </div>
    );
};

export default Reviews;