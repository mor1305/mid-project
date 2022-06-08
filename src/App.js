import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./layout/Header/Header";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Wishlist from "./pages/Wishlist/Wishlist";
import ShoppingCart from "./pages/ShoppingCart/ShoppingBag";
import AccountInfo from "./pages/AccountInfo/AccountInfo";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/" exact component={HomePage} />
        <Route path="/products/:category" exact component={Products} />
        <Route path="/products/item/:id" exact component={Product} />
        <Route path="/wishlist" exact component={Wishlist} />
        <Route path="/shopping-bag" exact component={ShoppingCart} />
        <Route path="/account-info" exact component={AccountInfo} />
      </BrowserRouter>
    </div>
  );
}
