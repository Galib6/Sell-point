import React, { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Navbar/Navbar';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';



const DashboradLayout = () => {
    const { user } = useContext(AuthContext)
    // console.log(admin)

    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    const [isSeller] = useSeller(user?.email)
    // console.log(isSeller)


    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-4'>
                <div className='col-span-1 '>
                    <ul className="menu p-4 w-80  text-base-content rounded-box">
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reported">Reported Products</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            !isSeller && !isAdmin &&
                            <>
                                <li><Link to="/dashboard/myorder">My Order</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div className='min-h-screen col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashboradLayout;