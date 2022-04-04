import React from 'react';
import Laptop from "../../Assets/Image/Laptop.png";
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='Home-container'>
            <div className='home-info-container'>
                <h1 className='text-5xl font-extrabold text-blue-400 mb-4'>We Are Here For You</h1>
                <h1 className='text-4xl font-extrabold text-purple-300'>Know Whats Best For you</h1>
                <p className='text-justify mt-6'>
                    Hello, This Website make sure what's best for you and always there for you <br></br>
                    to choose and buy a new laptop. here We Show you Some Expert Review and also <br></br>
                    we show you some chart about this product, thank you for being with us.
                </p>

                 <div className='text-center mt-6'>
                        <button className='btn-Home mt-8 font-bold'>More Info</button>
                 </div>
                
            </div>
            <div className='home-image-container'>
                <img src={Laptop} alt="" />
            </div>
        </div>
            
            <HomeReview></HomeReview>
        </div>
        
    );
};

export default Home;