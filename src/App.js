import "./App.css";
import Navbar from "./componants/Navbar";
import Sidebar from "./componants/Sidebar";
import Home from "./pages/Home";
import { Routes , Route } from "react-router-dom";
import Products from "./pages/Products";
import Categories from "./pages/Categories"
import AddNewProduct from "./pages/AddNewProduct";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="products" element={<Products />} />
           <Route path="products/addNProduct" element={<AddNewProduct />} />
           <Route path="products/:productId" element={<ProductDetails />} />
           <Route path="categories" element={<Categories />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
