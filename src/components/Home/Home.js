import React from 'react';
import Laptop from "../../Assets/Image/Laptop.png";
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='Home-container'>
            <div className='home-info-container'>
                <h1 className='text-5xl font-bold text-blue-400 mb-4'>We Are Here For You</h1>
                <h1 className='text-4xl font-bold text-purple-300'>Know Whats Best For you</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur vel atque mollitia inventore excepturi culpa libero adipisci saepe. Id.</p>

                 <div className='text-center'>
                        <button className='btn-Home-info mt-8'>More Info</button>
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