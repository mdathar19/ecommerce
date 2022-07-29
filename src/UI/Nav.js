import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem("user") // here we check authentication for the logOut and SignUp component.
    const navigate = useNavigate();  // we use navigate to reRender the page 
    const logOut = () => {  //we call logOut onClick to do some function
        localStorage.clear(); //here we clear the localStorage 
        navigate('/logIn') // and the we navigate to the Login page.
    

    }
    const imageHome =() =>{
        navigate('/')
    }


    return (
        <nav className=' bg-primary nav-position'>
            <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' onClick={imageHome} className='image float-start' alt='logo'/>
            {
                auth ? <ul className='nav  bg-danger'>
                    <li className='nav-item'><Link to={'/'} className="nav-link text-white p-4 fs-5"> Home </Link> </li>

                    <li className='nav-item'><Link to={'/product'} className="nav-link text-white p-4 fs-5"> Product </Link> </li>

                    <li className='nav-item'><Link to={'/add'} className="nav-link text-white p-4 fs-5"> Add Product </Link> </li>

                    {/* <li className='nav-item'><Link to={'/UpdateProduct/:id '} className="nav-link text-white p-4 fs-5"> Update Product </Link> </li> */}
                    <li className='nav-item'><Link to={'/logIn'} onClick={logOut} className="nav-link text-white p-4 fs-5"> LogOut ({JSON.parse(auth).name})</Link> </li>
                </ul>
                    :
                    <div>
                    <ul  className='nav d-flex justify-content-end'>
                        <li><Link to={'/signUp'} className="nav-link text-white p-4 fs-5"> SignUp </Link> </li>
                        <li >
                            <Link to={'/logIn '} className="nav-link text-white p-4 fs-5"> logIn </Link>
                        </li>
                    </ul>
                    </div>
            }

        </nav>
    );
}

export default Nav
