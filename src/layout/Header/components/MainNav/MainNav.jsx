import { Link } from "react-router-dom";
import "./MainNav.css"
import { useData } from "../../../../context/Context"
import SearchBar from "../SearchBar/SearchBar";

export default function MainNav() {

  const {wishList} = useData()

  return (
  <div className="MainNav">
      <div className="user-info">
        <span>Welcome Mor</span>
        <Link to="/account-info">
         <span className="material-symbols-outlined">person</span>
        </Link>
        <Link to="/wishlist">
          <span className="material-symbols-outlined">favorite</span>
          <span>{wishList.length > 0 && <>{wishList.length}</>}</span>
        </Link>
        <Link to="/shopping-bag">
         <span className="material-symbols-outlined">shopping_bag</span>
        </Link>
      </div>
      <Link to="/">
        <div className="logo">
          <div className="icon"></div> 
          <h1>PIECE</h1>
        </div>
      </Link>
       <SearchBar/>
  </div>
  )
}

