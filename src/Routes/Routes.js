import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Components/Pages/AllProducts/AllProducts";
import AddAProduct from "../Components/Pages/Dashboard/AddAProduct/AddAProduct";
import Allbuyers from "../Components/Pages/Dashboard/AllBuyers/Allbuyers";
import AllSeller from "../Components/Pages/Dashboard/AllSeller/AllSeller";
import DashboradHome from "../Components/Pages/Dashboard/Dashborad/DashboradHome";
import MYorder from "../Components/Pages/Dashboard/MyOrder/MYorder";
import MyProductList from "../Components/Pages/Dashboard/MyProduct/MyProductList";
import ReportedItems from "../Components/Pages/Dashboard/ReportedIitems/ReportedItems";
import Homepage from "../Components/Pages/HomePage/Homepage";
import Login from "../Components/Pages/Login/Login";
import CheckOutform from "../Components/Pages/Payment/CheckOutform";
import Payment from "../Components/Pages/Payment/Payment";
import SignUp from "../Components/Pages/SignUp/SignUp";
import DashboradLayout from "../Layout/DashboradLayout";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/category/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <AllProducts></AllProducts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },



        ]
    },
    {
        path: "/dashboard",
        element: <DashboradLayout></DashboradLayout>,
        // errorElement: <DispayError></DispayError>,
        children: [
            {
                path: "/dashboard",
                element: <DashboradHome></DashboradHome>,

            },
            {
                path: "/dashboard/allseller",
                element: <AllSeller></AllSeller>,

            },
            {
                path: "/dashboard/allbuyers",
                element: <Allbuyers></Allbuyers>,

            },
            {
                path: "/dashboard/addaproduct",
                element: <AddAProduct></AddAProduct>
            },
            {
                path: "/dashboard/myproducts",
                element: <MyProductList></MyProductList>
            },
            {
                path: "/dashboard/myorder",
                element: <MYorder></MYorder>
            },
            {
                path: "/dashboard/reported",
                element: <ReportedItems></ReportedItems>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/payforbook/${params.id}`)

            },


        ]
    },

])