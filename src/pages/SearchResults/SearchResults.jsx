import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/Context'

export default function SearchResults() {
  const { productsData, inputValue } = useData()


  let filtered = []
  if (productsData) {
    if( inputValue !== "" ) {
      filtered = productsData.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase())) 
    }         
  }

  const renderedProducts = () => {
    if (productsData) {
      let rendered = filtered.map(({id, title, price, image}) => 
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
    <>
      <h3>Search Results</h3>
    <div className="Products">
        {renderedProducts()}
    </div>
    </>
  )
}