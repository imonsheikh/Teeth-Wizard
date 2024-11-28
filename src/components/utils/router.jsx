import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
// import About from "../About/About";
import AllTreatments from "../AllTreatments/AllTreatments";
import MyAppointments from "../MyAppointments/MyAppointments";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch('/service.json')
                    const serviceData = await serviceRes.json()

                    const feedBackRes = await fetch('/happyclients.json')
                    const feedBackData = await feedBackRes.json()

                    return {serviceData, feedBackData}
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/myAppointments',
                element: <PrivateRoute><MyAppointments></MyAppointments></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile></PrivateRoute>
            },
            {
                path: '/details/:id',
                element:<PrivateRoute> <Details></Details></PrivateRoute>,
                loader: async ({params}) => {
                   const res = await fetch('/service.json')
                   const data = await res.json()
                   console.log(data, params.id);

                   const singleData = data.find(d => d.id == params.id)
                   console.log(singleData);
                   
                   return singleData
                   
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router