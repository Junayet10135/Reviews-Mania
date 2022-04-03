import React from 'react';

const Review = ({ review }) => {
    const {img, name, ratings , comment} = review ;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Ratings: <small>{ratings}</small></h4>
            <h5>Review: {comment}</h5>
        </div>
    );
};

export default Review;