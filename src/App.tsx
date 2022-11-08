import { Product } from "./component/Product";

import { useProducts } from "./component/hooks/products";
import { Loader } from "././component/Loader";
import { ErrorMessage } from "./component/ErrorMessage";
import { Modal } from './component/Modal';
import { CreateProduct } from './component/CreateProduct';
import {useState} from 'react';

function App() {
  const { loading, error, products } = useProducts();
  const [modal,setModal] = useState(true)

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
       {modal && <Modal title='Create new product' >
         <CreateProduct/>
      </Modal>}

      {/*<Product product={products[0]}/>
      <Product product={products[1] }/>*/}

      {/*<h1>Test JS {count}</h1>
   <button  className="py-2  px-4">Click me</button>*/}
    </div>
  );
}

export default App;
