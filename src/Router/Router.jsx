import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home Page/Home";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import Notices from './../Pages/Notices/Notices';
import Academic from './../Pages/Academic/Academic';
import OnlineAdmission from './../Pages/OnlineAdmission/OnlineAdmission';
import OnlinePayment from './../Pages/OnlinePayment/OnlinePayment';
import Events from './../Pages/Events/Events';
import Magazine from './../Pages/Magazine/Magazine';
import AboutUs from './../Pages/AboutUs/AboutUs';
import Gallery from './../Pages/Gallery/Gallery';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
      
      {
        path: "/notices",
        element: <Notices></Notices>,
      },
      
      {
        path: "/academic",
        element: <Academic></Academic>,
      },
      
      {
        path: "/onlineAdmission",
        element: <OnlineAdmission></OnlineAdmission>,
      },
      
      {
        path: "/onlinePayment",
        element: <OnlinePayment></OnlinePayment>,
      },
      
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/magazine",
        element: <Magazine></Magazine>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

    ],
  },
]);

export default Router;
