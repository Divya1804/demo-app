import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" Component={Login}/>
            <Route path="/cart" Component={Cart}/>
            <Route path="/edit-product" Component={EditProduct}/>
            <Route path="/product" Component={Product}/>
            <Route path="/product-list" Component={ProductList}/>
            <Route path="/register" Component={Register}/>
            <Route path="/" Component={Login}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
