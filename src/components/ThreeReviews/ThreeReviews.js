import React from 'react';
import './ThreeReviews.css'

const ThreeReviews = ({ review }) => {
    const { img, name, ratings, comment } = review;
    return (
        <div className=''>
            <div className='review'>
                <img src={img} alt="" />
                <div className='review-info'>
                    <h2>Name: {name}</h2>
                    <h4>Ratings: <small>{ratings}</small></h4>
                    <h5>Review: {comment}</h5>
                </div>
            </div>
        </div>
    );
};

export default ThreeReviews;