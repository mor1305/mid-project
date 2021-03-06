import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./layout/Header/Header";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Wishlist from "./pages/Wishlist/Wishlist";
import ShoppingCart from "./pages/ShoppingCart/ShoppingBag";
import AccountInfo from "./pages/AccountInfo/AccountInfo";
import { useData } from "./context/Context";
import Spinner from "./pages/Spinner/Spinner";
import SearchResults from "./pages/SearchResults/SearchResults";
import { useEffect } from "react";
import { getUsers } from "./api/usersApi";
import LogIn from "./pages/LogIn/LogIn";

export default function App() {
  const { productsData, setUsers } = useData();
  useEffect(() => {
    {
      const getUsersData = async () => {
        const updatedUsers = await getUsers();
        setUsers(updatedUsers);
      };
      getUsersData();
    }
  }, []);

  return (
    <div className="App">
      {productsData.length > 0 ? (
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products/:category" exact component={Products} />
          <Route path="/products/item/:id" exact component={Product} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/shopping-bag" exact component={ShoppingCart} />
          <Route path="/log-in" exact component={LogIn} />
          <Route path="/user-info" exact component={AccountInfo} />
          <Route path="/search-results" exact component={SearchResults} />
        </BrowserRouter>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
