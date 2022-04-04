import React from 'react';
import './HomeReview.css'
import { useNavigate } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';
import ThreeReviews from '../ThreeReviews/ThreeReviews';

const HomeReview = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();

    const handleSeeAllReview =()=>{
        const path = '/reviews'
        navigate(path);
    }
    return (
        <div>
            <h1 className='text-5xl mt-8 font-medium'>Customer Reviews</h1>
            
            <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review =>
                        <ThreeReviews
                            key={review.id}
                            review={review}
                        ></ThreeReviews>
                    )
                }
            </div>
           <div className='mb-8'>
                <button className='btn-Home font-bold' onClick={handleSeeAllReview}>See All Review</button>
           </div>
        </div>
    );
};

export default HomeReview;