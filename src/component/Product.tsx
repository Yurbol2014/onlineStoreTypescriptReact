import { useState } from 'react'
import {IProduct} from '../models'

interface ProductProps {
   product:IProduct
}

export function Product({product}:ProductProps) {
   
   const [detalies, setDetailes] = useState(false)
   
   const btnBgClassName = detalies ? 'bg-yellow-400 ' : 'bg-blue-400 '
 
   const btnClasses = ['py-2 px-4 border', btnBgClassName]
     
   return (
      <div className="border py-2 px-4  rounded flex flex-col items-center mb-2">
         <img src={product.image} className='w-1/6' alt={product.title}/>
        <p>{product.title}</p> 
        <p className='font-bold'>{product.price}</p>
        <button 
        onClick={()=> setDetailes(prev=>!prev)}
        className={btnClasses.join(' ')}>
         {detalies ? 'Hide Details' : 'Show Details'}
         </button>
      
       


        {detalies && <div>
          <p>{product.description}</p>
          <p>Rate:<span style={{fontWeight:'bold'}}>{product?.rating?.rate}</span></p>
         </div>}
       
         </div>
   )
}

