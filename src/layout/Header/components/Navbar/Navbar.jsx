import { Link } from "react-router-dom";
import "./navbar.css"
import {useData} from "../../../../context/Context"

export default function Navbar() {
  const {categoriesData} = useData()

  const categories = Object.keys(categoriesData)

  const renderedCategories = () => {
    const rendered = categories.map(category => {
      return (
        <Link key={category} to={`/products/${category}`}>
        <div className="category">
          {category.toUpperCase()}
        </div>  
        </Link>
      )
    })
    return rendered
  }

  return (
  <div className="Navbar">
    <nav>
     {categoriesData? renderedCategories(): "Loading"}
     {/* {renderedCategories()} */}
    </nav>
  </div>
  )
}

