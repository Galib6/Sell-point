import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryItem = () => {

    const [categores, setcategores] = useState([]);
    useEffect(() => {
        axios
            .get("https://sell-point-server.vercel.app/category")
            .then((res) => setcategores(res.data))

    }, []);

    return (
        <div>
            <div>
                <h2 className='text-4xl text-center font-bold mb-5'>Category Items</h2>
                <h2 className='text-center lg:mx-60 mb-5'>We are providing three type category car facility.</h2>
            </div>
            <div className="divider"></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12'>

                {
                    categores.map(category =>
                        <div className="card card-compact  bg-base-100 shadow-xl" key={category._id}>
                            <figure><img src={category.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="card-actions ">
                                    <Link className="btn btn-primary btn-sm w-full" to={`/category/${category.id}`}><button >View All Cars</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="bg-deep-purple-accent-700">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                            <a href="/" className="mb-3 sm:mx-auto">
                                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-teal-accent-400">
                                    <img src="https://www.pngmart.com/files/22/Car-Logo-PNG-Transparent.png" alt="" />
                                </div>
                            </a>
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
                                    <span className="relative inline-block">
                                        <svg
                                            viewBox="0 0 52 24"
                                            fill="currentColor"
                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                        >
                                            <defs>
                                                <pattern
                                                    id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                    x="0"
                                                    y="0"
                                                    width=".135"
                                                    height=".30"
                                                >
                                                    <circle cx="1" cy="1" r=".7" />
                                                </pattern>
                                            </defs>
                                            <rect
                                                fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                                width="52"
                                                height="24"
                                            />
                                        </svg>
                                        <span className="relative">Selling Point!</span>
                                    </span>{' '}
                                    The Most trusted reselling site
                                </h2>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryItem;