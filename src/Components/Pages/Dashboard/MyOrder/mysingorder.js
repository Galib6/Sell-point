import React from 'react';
import { Link } from 'react-router-dom';

const Mysingorder = ({ myorder, i }) => {
    console.log(myorder)
    return (
        <tr key={myorder._id}>
            <th>{i + 1}</th>
            <td>{myorder.productname}</td>
            <td > <span className='hidden md:block'>{myorder.location}</span></td>
            <td><span className='hidden md:block'> {myorder.time} </span> </td>
            <td>
                {
                    myorder?.paid ? <h2 className='bg-lime-400'>Paid</h2> : <Link to={`/dashboard/payment/${myorder._id}`}><button className='btn btn-sm btn-accent'>Pay</button></Link>
                }
            </td>
        </tr>
    );
};

export default Mysingorder;