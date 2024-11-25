import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
// import About from "../About/About";
import AllTreatments from "../AllTreatments/AllTreatments";
import MyAppointments from "../MyAppointments/MyAppointments";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/myAppointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])


export default router