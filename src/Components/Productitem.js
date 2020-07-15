import React from 'react';
import Shoes from './../shoes.json';
import {useParams} from 'react-router-dom';
function Productitem() {
     const{id}=useParams()
     const shoe=Shoes[id]
     if(!shoe)
     return<h2>Product item not found</h2>
  return (
    <div>
      <h1>Welcome to Product items Details</h1>
      <div className="link">
                 <h4>{shoe.name}</h4>
                 <img src={shoe.img} height={300}alt="shoe"/>
          </div>
    </div>
  );
}

export default Productitem;