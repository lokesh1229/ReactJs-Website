import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <div>
      <div className='productsCard'>
        <img src={props.image} width={"100%"} height={200} alt=''/>
        <p><b>{props.title}</b></p>
        <p>{props.category}</p>
        <h6>${props.price}</h6>
        <Link to={`/productdetails/${props.id}`}>
        <button className='btn btn-outline-success'>Product Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
