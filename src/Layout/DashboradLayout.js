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
    console.log(isSeller)


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dash-borad-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-borad-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
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
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashboradLayout;