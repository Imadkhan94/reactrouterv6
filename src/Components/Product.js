import React from 'react';
import Shoes from './../shoes.json';
import {Link} from "react-router-dom";
function Product() {
    console.log(Object.keys(Shoes))
  return (
    <div>
      <h1>Welcome to Products</h1>
      <div className="productcontainer">
        {Object.keys(Shoes).map(keyName=>{
          return(
            <Link className="link"to={`/Productitem/${keyName}`}>
                 <h4>{Shoes[keyName].name}</h4>
                 <img src={Shoes[keyName].img} height={150}alt="Shoes"/>
          </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Product;