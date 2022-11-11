import { Product } from "./component/Product";

import { useProducts } from "./component/hooks/products";
import { Loader } from "././component/Loader";
import { ErrorMessage } from "./component/ErrorMessage";
import { Modal } from './component/Modal';
import { CreateProduct } from './component/CreateProduct';
import {useContext} from 'react';
import { IProduct } from './models';
import { ModalContext } from './component/context/ModalContext';

function App() {
  const { loading, error, products, addProduct } = useProducts();
//  const [modal,setModal] = useState(false) //вместо этого ModalContext
 const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct)=>{
  close()
   addProduct(product)

  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
       {modal && <Modal title='Create new product' onClose={close} >
         <CreateProduct onCreate={createHandler}/>
      </Modal>}
      <button 
      className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
      onClick={open}>+</button>
      {/*<Product product={products[0]}/>
      <Product product={products[1] }/>*/}

      {/*<h1>Test JS {count}</h1>
   <button  className="py-2  px-4">Click me</button>*/}
    </div>
  );
}

export default App;
