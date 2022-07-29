import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate('/')
        }
    })
    const logInHandle = async () => {
        console.log(email, password)
        let result = await fetch("http://localhost:5000/logIn", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            },
        });
        result = await result.json()
        console.table(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token",JSON.stringify(result.auth))
            if (result) {
                navigate('/')
            }
        }else{
            alert("Authentication Failed")
        }

    }


    return (
        <div className="row d-flex justify-content-center">
            <h1 className='text-center col-md-12'> Login</h1>
            <div className='form  mt-4 card form_back col-md-4 col-sm-6 '>
                <div className='mt-3 mb-3'>
                    <label className=''> Please Type Your Email </label>
                    <input className='form-control' type='email' autoFocus placeholder='Type Email'
                        onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label className=''> Please Type Your Email </label>
                    <input className='form-control' type='password' placeholder='Type Password'
                        onChange={(e) => setPassword(e.target.value)} value={password} />

                </div>
                <div className="d-flex justify-content-between mb-3">
                    <button className='btn btn-primary' onClick={logInHandle}> Login </button>
                    <h6> Dont have an account click <span> <a href="/signUp">here</a> </span></h6>
                </div>
            </div>

        </div>
    );
}

export default Login