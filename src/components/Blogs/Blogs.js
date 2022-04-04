import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-8'>
        <h1 className='text-5xl font-bold'>Blogs</h1>
            <div className=' mt-8 mb-8'>
                <h2 className='text-4xl text-left ml-64 mb-8'>What is Context Api?</h2>
                <p className='text-left ml-64'>Context API is one of the most powerful structures in React, which help to       exchange<br></br>
                    data from root to any child which is under that tree.<br></br>
                    Using this we can avoid prop-drilling from all parents in our tree, we can share data<br></br>
                    directly.<br></br>
                    For example: using Context API your grandfather can share his property with you without using your<br></br>
                    father or via your father.<br></br>
                    Many people think there is no difference between Redux and Context API but, Context API<br></br>
                    require minimal setup on the other hand Redux requires extensive setup to integrate it with<br></br>
                    react application.</p>
            </div>
            <div>
                <h2 className='text-4xl text-left ml-64 mb-8'>What is Semantic Tag?</h2>
                <p className='text-left ml-64'>

                    Using semantic tags is helpful to understand code clearly and describe it for Developers and browsers.<br></br>
                    using a non-semantic tag means nothing you don't know what it would show you, Example Like: Div, span <br></br>
                    using semantic tag you know what it would show, Examples Like: form, table, h1 to h6, etc. <br></br>
                    Semantic tags help search engines communicate with the right page which is required. <br></br>
                    you have so many hooks fo9r styling your page when you use semantics properly. <br></br>
                    It's always helpful for you to present your code properly, and the client will understand properly. <br></br>
                    All HTML5 tags already have the semantic meaning which is good for you.

                </p>
            </div>
        </div>
    );
};

export default Blogs;