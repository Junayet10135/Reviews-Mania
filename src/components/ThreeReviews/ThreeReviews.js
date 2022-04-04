import React from 'react';
import './ThreeReviews.css'

const ThreeReviews = ({ review }) => {
    const { img, name, ratings, comment } = review;
    return (
        <div className=''>
            <div className='review'>
                <img src={img} alt="" />
                <div className='review-info'>
                    <h2 className='text-2xl'> <span className='font-bold'>Name:</span> {name}</h2>
                    <h4 className='text-xl'><span className='font-bold'>Ratings:</span> <small>{ratings}</small></h4>
                    <h5 className='text-lg'><span className='font-bold'>Review:</span> {comment}</h5>
                </div>
            </div>
        </div>
    );
};

export default ThreeReviews;