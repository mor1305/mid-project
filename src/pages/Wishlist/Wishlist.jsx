import { Link } from "react-router-dom";
import { useData } from "../../context/Context"
import "./wishlist.css"

export default function Wishlist() {
  const {wishList} = useData()

  const renderedProducts = () => {
    let rendered = wishList.map((({id, title, price, image}) => 
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
           ) }))
    return rendered
  }

  return (
      <div className="WishList">
        {renderedProducts()}
      </div>
  )
 }


// export default function Products({match: {params : {category}}}) {

//   const {wishList} = useData()
//   console.log(wishList)

//   const renderedProducts = () => {
    
//     if (categoriesData[category]) {
//       let rendered = categoriesData[category].map(({id, title, price, description, category, image, rating}) => 
//           {
//             return (
//               <Link key={id} to={`/products/item/${id}`}>
//                 <div className="productCard">
//                   <div className="image-container">
//                     <img src={image} alt={title}/>
//                   </div>
//                   <div className="data-container">
//                   <p>
//                   {title}
//                   </p>
//                   <h5>
//                   {price} $
//                   </h5>
//                   </div>
//                 </div>
//               </Link>
//        ) })
//       return rendered
//     }
//   }

//   return (
//   <div className="Products">
//     {renderedProducts()}
//   </div>
//   )
// }


