import { Product } from "./component/Product";

import { useProducts } from "./component/hooks/products";
import { Loader } from "././component/Loader";
import { ErrorMessage } from "./component/ErrorMessage";

function App() {
  const { loading, error, products } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {/*<Product product={products[0]}/>
      <Product product={products[1] }/>*/}

      {/*<h1>Test JS {count}</h1>
   <button  className="py-2  px-4">Click me</button>*/}
    </div>
  );
}

export default App;
