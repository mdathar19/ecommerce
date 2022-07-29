import React , {useState,useEffect} from "react";
import {useParams} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = useState(" ");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [success , setSuccess] = useState(false);
    const params = useParams();

    useEffect(()=>{
        getProduct();
    })

    const getProduct = async() =>{
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            // headers:{
            //     authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            // }
        });
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    const update = () =>{
        alert("OK")
        setSuccess(true)
    }

    return (
        <div className="row">
            <h1 className="text-center col-md-12 col-6 heading"> Update Product</h1>
            <div className="form   p-3 mt-3 container col-md-4 text-center">
                <input className="form-control input_outline" type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Product name"  autoFocus />
            

                <input className="form-control  mt-3 input_outline" type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder="Enter Product Price" />
                

                <input className="form-control mt-3 input_outline" type="text" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder="Enter Category" />
                

                <input className="form-control mt-3 input_outline" type="text" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder="Enter Company" />

                <div className="d-flex justify-content-start">
                    <button className="btn form_back text-dark fw-bold mt-3" onClick={update}> Add Product </button>
                </div>
                <div>
                    {success && <span className="text-success"> Product Added Successfully </span>}
                </div>
            </div >


        </div>
    );
}

export default UpdateProduct;