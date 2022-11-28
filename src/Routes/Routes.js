import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import AllProducts from "../Components/Pages/AllProducts/AllProducts";
import AddAProduct from "../Components/Pages/Dashboard/AddAProduct/AddAProduct";
import Allbuyers from "../Components/Pages/Dashboard/AllBuyers/Allbuyers";
import AllSeller from "../Components/Pages/Dashboard/AllSeller/AllSeller";
import DashboradHome from "../Components/Pages/Dashboard/Dashborad/DashboradHome";
import MYorder from "../Components/Pages/Dashboard/MyOrder/MYorder";
import MyProductList from "../Components/Pages/Dashboard/MyProduct/MyProductList";
import ReportedItems from "../Components/Pages/Dashboard/ReportedIitems/ReportedItems";
import ErrorPage from "../Components/Pages/ErrorPage";
import Homepage from "../Components/Pages/HomePage/Homepage";
import Login from "../Components/Pages/Login/Login";
import CheckOutform from "../Components/Pages/Payment/CheckOutform";
import Payment from "../Components/Pages/Payment/Payment";
import SignUp from "../Components/Pages/SignUp/SignUp";
import DashboradLayout from "../Layout/DashboradLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoutes/AdminRoutes";
import PrivateRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/category/:id",
                loader: ({ params }) => fetch(`https://sell-point-server.vercel.app/category/${params.id}`),
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },



        ]
    },
    {
        path: "/dashboard",
        element: <DashboradLayout></DashboradLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <DashboradHome></DashboradHome>,

            },
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>,

            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><Allbuyers></Allbuyers></AdminRoute>,

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
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://sell-point-server.vercel.app/payforbook/${params.id}`)

            },


        ]
    },

])