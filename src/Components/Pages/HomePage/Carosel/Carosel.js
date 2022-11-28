import React from 'react';
import { Link } from 'react-router-dom';

const Carosel = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="hero mt-5 mb-40">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-1/2 relative'>
                            <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" className=" w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                            <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-85e0e9ab23134961c88e4ecea2bff53f.jpg" className=" absolute w-3/5 border-8 right-5 top-1/2 rounded-lg shadow-2xl" alt='' />
                        </div>
                        <div className='w-1/2'>
                            <p className=' my-5 text-2xl font-bold text-orange-600'>About us</p>
                            <h1 className="text-5xl font-bold">
                                Website contains <br />
                                500+ seller <br />
                                5000+ Successful booking</h1>
                            <p className="py-6 pr-5">Resealing is the process of altering the custom metadata or editing the encrypted content. Oracle IRM Desktop allows certain formats, such as Microsoft Office, to be edited in sealed form. The process of saving edits is called resealing. </p>
                            <Link to="/signup"><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Carosel;