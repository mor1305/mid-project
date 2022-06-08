import { Link } from "react-router-dom";
import "./products.css"
import {useData} from "../../context/Context"

export default function Products({match: {params : {category}}}) {

  const {categoriesData} = useData()

  const renderedProducts = () => {
    
    if (categoriesData[category]) {
      let rendered = categoriesData[category].map(({id, title, price, description, category, image, rating}) => 
          {
            return (
              <Link key={id} to={`/products/item/${id}`}>
                  <div className="productCard">
                    <div className="image-container">
                      <img src={image} alt={title}/>
                    </div>
                    <div className="data-container">
                      <p>
                      {title}
                      </p>
                      <h5>
                      {price} $
                      </h5>
                    </div>
                  </div>
              </Link>
       ) })
      return rendered
    }
  }

  return (
  <div className="Products">
    {renderedProducts()}
  </div>
  )
}


