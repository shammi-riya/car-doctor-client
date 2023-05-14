import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import SighinUp from "./Pages/Login/SighinUp";
import Survice from "./Pages/Survice/Survice";
import Booking from "./Pages/Booking/Booking";
import PrivetRoute from "./PrivetRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },

        {
          path:"/login",
          element:<Login></Login>
      },
      {
          path:"/sighinup",
          element:<SighinUp></SighinUp>
      },
      {
        path:"/survice/:id",
        element:<Survice></Survice>,
        loader:({params})=>fetch(`http://localhost:5000/Survices/${params.id}`)
      },
      {
        path:"/booking",
        element:<PrivetRoute><Booking></Booking></PrivetRoute>
      }


      ],
    },
   
  ]);
  export default router;