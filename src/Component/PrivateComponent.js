import React from "react";
import {Navigate,Outlet} from 'react-router-dom';

const PrivateComponent =() =>{
    const auth = localStorage.getItem("token") // checks whether local storage has some user value or not,
    return auth?<Outlet/>:<Navigate to='/login'/> // then navigate to the private Outlet or to signUp componnent
}

export default PrivateComponent;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateComponent = () => {
//     const auth = localStorage.getItem("token")
//     return auth? <Outlet/> : <Navigate to ='/login'/>
// }
