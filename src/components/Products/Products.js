import { useState } from "react";
import "./Products.css";
import "./Product.css";
import { productsData } from "./productsData.js";
import Product from "./Product.js";
import axios from "axios";
function Products() {
  let [products, setProducts] = useState(productsData);

  const getAllProducts = () =>{
    //Write the logic to send request to server and update data in products state
    axios.get("https://fakestoreapi.com/products")
    .then((productsdata) => {
      // console.log(productsdata);
      setProducts(productsdata.data);
    }).catch((errordata) => {
      console.log(errordata);
    });
  }

  const getAllElectronics = () =>{
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((electronicsdata) => {
      setProducts(electronicsdata.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const getAllJewellery = () =>{
    axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((jewellerydata) => {
      setProducts(jewellerydata.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const getMensClothing = () =>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((mensdata) => {
      setProducts(mensdata.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const getWomenClothing = () =>{
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((womensdata) => {
      setProducts(womensdata.data);
      
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="products">
        <div className="radioSection">
        <h1>Products</h1>
      <div className="form-check form-check-inline">
        <input
          // defaultChecked
          name="category"
          type="radio"
          className="form-check-input"
          onChange={getAllProducts}
        />
        <label class="form-check-label">ALL</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAllElectronics} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Electronics</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAllJewellery} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Jewellery</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getMensClothing} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Men's Clothing</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getWomenClothing} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Women's Clothing</label>
      </div>
      </div>

        {/* <div className="productsSection">
          <Product image={products[0].image} title={products[0].title} price={products[0].price}/>
          <Product image={products[1].image} title={products[1].title} price={products[1].price}/>
          <Product image={products[2].image} title={products[2].title} price={products[2].price}/>
          <Product image={products[3].image} title={products[3].title} price={products[3].price}/>
        </div>

        <div className="productsSection">
          <Product image={products[4].image} title={products[4].title} price={products[4].price}/>
          <Product image={products[5].image} title={products[5].title} price={products[5].price}/>
          <Product image={products[6].image} title={products[6].title} price={products[6].price}/>
          <Product image={products[7].image} title={products[7].title} price={products[7].price}/>
        </div>

        <div className="productsSection">
          <Product image={products[8].image} title={products[8].title} price={products[8].price}/>
          <Product image={products[9].image} title={products[9].title} price={products[9].price}/>
          <Product image={products[10].image} title={products[10].title} price={products[10].price}/>
          <Product image={products[11].image} title={products[11].title} price={products[11].price}/>
        </div>

        <div className="productsSection">
          <Product image={products[12].image} title={products[12].title} price={products[12].price}/>
          <Product image={products[13].image} title={products[13].title} price={products[13].price}/>
          <Product image={products[14].image} title={products[14].title} price={products[14].price}/>
          <Product image={products[15].image} title={products[15].title} price={products[15].price}/>
        </div>

        <div className="productsSection">
          <Product image={products[16].image} title={products[16].title} price={products[16].price}/>
          <Product image={products[17].image} title={products[17].title} price={products[17].price}/>
          <Product image={products[18].image} title={products[18].title} price={products[18].price}/>
          <Product image={products[19].image} title={products[19].title} price={products[19].price}/>
        </div>  */}

        <h4 style={{textAlign:"center",color:"green",marginTop:"20px"}}>
          Number of products : {products.length}
        </h4>



        <div className="productsSection">
          {
            products.map(function(element,index){
              return <Product title={element.title} 
              image={element.image} 
              category={element.category} 
              price={element.price}
              id = {element.id} 
              />
            })
          }
        </div>

    </div>
  );
}

export default Products;