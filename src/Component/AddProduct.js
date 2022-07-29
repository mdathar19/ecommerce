import React, { useState } from "react";
// import { useEffect } from "react";

const AddProduct = () => {
const [name,setName] = useState("");
const  [price,setPrice] = useState("");
const [category,setCategory] = useState("");
const  [company,setCompany] = useState("");
const [error , setError] = useState(false)
const [success , setSuccess] = useState(false)



const add = async () =>{
    const userId = JSON.parse(localStorage.getItem("user"))._id // here we are getting user Id from local storage
    if(!name || !price || !category)  // here we checking all field is filled then we go next and able to update
    {
        setError(true)
        return false;
    }
    

    
    let result   = await fetch("http://localhost:5000/add-product",{
        method : "post",
        body : JSON.stringify({name,price,category,userId,company}),
        headers : {
            'Content-type' : 'application/json',
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`        
        },

    });
    result = await result.json()
    console.table(result)
    setName("")
    setCategory("")
    setCompany("")
    setPrice("")
    setSuccess(true)
    
}



    return (
        <div className="row">
            <h1 className="text-center col-md-12 col-6 heading"> Add Product</h1>
            <div className="form   p-3 mt-3 container col-md-4 text-center">
                <input className="form-control input_outline"  type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Enter Product name" autoFocus />
                {error && !name && <span className="text-danger d-flex justify-content-start"> Please Enter valid Name </span>}
                
                <input className="form-control  mt-3 input_outline" type="text"  onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder="Enter Product Price" />
                {error && !price && <span className="text-danger d-flex justify-content-start"> Please Enter valid Price </span>}

                <input className="form-control mt-3 input_outline" type="text"  onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder="Enter Category" />
                {error && !category && <span className="text-danger d-flex justify-content-start"> Please Enter valid Category </span>}

                <input className="form-control mt-3 input_outline" type="text"  onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder="Enter Company" />

                <div className="d-flex justify-content-start">
                    <button className="btn form_back text-dark fw-bold mt-3" onClick={add}> Add Product </button>
                </div>
                <div>
                    {success && <span className="text-success"> Product Added Successfully </span>}
                </div>
            </div >


        </div>
    )
}

export default AddProduct