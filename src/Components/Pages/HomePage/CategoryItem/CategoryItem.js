import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = () => {

    const { data: categores = [] } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/category");
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    return (
        <div>
            <h4 className='text-3xl text-center'>Category</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12'>

                {
                    categores.map(category =>
                        <div className="card card-compact  bg-base-100 shadow-xl" key={category._id}>
                            <figure><img src={category.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="card-actions ">
                                    <button className="btn btn-primary btn-sm w-full"><Link to={`/category/${category.id}`}>View All Cars</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryItem;