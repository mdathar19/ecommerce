import React,{ useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { validEmail} from '../regex/Regex';

const SignUp =() =>{
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [emailErr, setEmailErr] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    })
    
    const formData =async() =>{ // result return the promise so we writes await here .
        if (!validEmail.test(email)) {
            setEmailErr(true);
            return false;
         }
   
        console.log(name,email,password)  // this fetch mehtod is from javascript 
        let result = await fetch('http://localhost:5000/register',{//first parameter url and second body and header (method)
        method:'post',  // we are using mmethod , post/get.etcccc
        body: JSON.stringify({name,email,password}), //because body takes json  format we cant give in object format
        headers:{
            'Content-type' : 'application/json' 
        },
        });
        result = await result.json() // here result also gives promise so we again store the value to result , and then console it log, and we also used json format when we test our code in postman remember .
        console.table(result)
        // localStorage.setItem("user",JSON.stringify(result.result)) // it creates the name and result in json format
        // localStorage.setItem("token",JSON.stringify(result.auth)) // and save there.
        if(result){
            navigate('/login') // here navigate method returns the path were we want to go after signUp, so we import and use.
        }
    }
    
         

    return(
        <div className="row d-flex justify-content-center">
             <h1 className='text-center col-md-12'> Registration
              </h1>
        <div className='form card mt-4  form_back col-md-6 col-sm-6 '>
            <div className='mt-3 mb-5'>
            <label className='text-white'> Please Type Your Name </label>
            <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)} type='text' autoFocus placeholder='Type Name' />
            

            <label className='text-white'> Please Type Your Enail</label>
            <input className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Type Email' />
            <span> {emailErr && <p className='text-danger fw-bold'>Your email is invalid</p>} </span>
            
            <label className='text-white'> Type Your Password </label>
            <input className='form-control'  value={password} onChange={(e)=>setPassword(e.target.value)} type='Password' placeholder='' />
            
            <button onClick={formData} className='btn btn-primary mt-3 form-control'> SignUp </button>
            </div>
            

        </div>
        </div>
    )
}

export default SignUp