import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';

const HomeReview = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();

    const handleSeeAllReview =()=>{
        const path = '/reviews'
        navigate(path);
    }
    return (
        <div>
            <h1 className='text-5xl mt-8'>Customer Reviews</h1>
            
            {
                reviews.slice(0,3).map(review =>
                <h2>Name:{review.name}</h2>
                )
            }
            <button onClick={handleSeeAllReview}>See All Review : {reviews.length}</button>
        </div>
    );
};

export default HomeReview;