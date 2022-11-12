import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./component/pages/ProductsPage";
import { AboutPage } from "./component/pages/AboutPage";
import { Navigation } from './component/Navigation';
function App() {
  return (

   <>
   <Navigation/>
   <Routes>
      <Route path="/" element={<ProductsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
   </Routes>
   </>
  )
}

export default App;
