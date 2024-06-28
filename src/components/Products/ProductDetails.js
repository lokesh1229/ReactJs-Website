import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";
import axios from 'axios';
import { productsData } from './productsData';

function ProductDetails() {
  let {id} = useParams();
  let [state,setState] = useState({

    id:null,
    title :null,
    description : null,
    price:null,
    category:null,
    image:"",
    rating:{ rate:null , count:null },
  });

  useEffect(()=>{
    getProductData();
  },[]);


  const getProductData = () =>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((productInfo) => {
      setState(productInfo.data);
    }).catch((errordata) => {
      console.log(errordata);
      alert("Error while getting products data");
    });
  }

  return (
    <div className='productDContainer p-3'>
      <div className='imageContainer'>
        <img alt='' src={state.image} height={"100%"} width={"100%"} />
      </div>

      <div className='contentContainer'>
        <dl>
          <dt>Product Name :</dt>
          <dd>{state.title}</dd>
          <dt>Product ID :</dt>
          <dd>{state.id}</dd>
          <dt>Product Description : </dt>
          <dd>{state.description}</dd>
          <dt>Product count :</dt>
          <dd>{state.rate}</dd>
        </dl>
        <button className='btn btn-outline-danger dark'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails;
