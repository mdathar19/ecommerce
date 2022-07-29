import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProduct();
    }, [])



    const getProduct = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json()
        setProducts(result);

    }
    console.log(products)
    const delItem = async (d) => {
        let del = await fetch(`http://localhost:5000/products/${d}`, {
            method: "Delete",
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        del = await del.json();
        if (del) {
            getProduct()
            // alert("The item deleted")
        }
    }

    return (
        <div className=" text-center products">
            <h1> Product List </h1>
            <ul className="d-flex justify-content-center product-heading">
                <li> Sl no</li>
                <li> Name </li>
                <li> Price </li>
                <li> Category  </li>
                <li> Company </li>
                <li> Operations </li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id} className="d-flex justify-content-center product-list">
                        <li> {index + 1}</li>
                        <li> {item.name}</li>
                        <li> ${item.price}</li>
                        <li> {item.category}  </li>
                        <li> {item.company} </li>
                        <li> <button className="btn btn-danger" onClick={() => { delItem(item._id) }}> delete </button>
                            <Link to={"/UpdateProduct/" + item._id}> Update </Link> </li>


                    </ul>
                )
            }

        </div>
    )
}

export default ProductList;