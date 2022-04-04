import React from 'react';
import './About.css'
import myPic from "../../Assets/Image/myPic.jpg";

const About = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-5xl font-bold' > Wanna Know Who is the Developer of This Site??</h1>
            <div className='my-info'>
                <div className='my-pic'>
                   <img src={myPic} alt="" />
                </div>
                <div className='info'>
                    <h2 className='text-4xl'><span className='font-bold'>Name:</span> Junayet Hassan Tamim</h2>
                    <h3 className='text-2xl mt-8'> <span className='font-semibold'>profession:</span> Web Developer</h3>
                </div>
            </div>

        </div>
    );
};

export default About;