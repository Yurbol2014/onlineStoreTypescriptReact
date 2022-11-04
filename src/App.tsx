import { useState } from "react";
import React from 'react';
import {Product} from './component/Product';
import {products} from './data/products'
function App() {

   const[count,setCount]= useState(0)
  return (
   <div className="container mx-auto max-w-2xl pt-5">
      <Product product={products[0]}/>
      <Product product={products[1] }/>
    
   {/*<h1>Test JS {count}</h1>
   <button  className="py-2  px-4">Click me</button>*/}
   </div>
  );
}

export default App;
