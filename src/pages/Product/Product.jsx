import { useEffect } from "react"
import { useData } from "../../context/Context"
import Button from "./components/Button/Button"
import "./product.css"

export default function Product({match: {params : {id}}}) {

  const {
    productsData, handleList, isOnWishList, setIsOnWishList, checkIfOnTheList, 
    wishList, setWishList, shoppingBag, setShoppingBag, isOnShoppingBag, setIsOnShoppingBag 
  } = useData()
 
  const currentProduct = productsData.filter(product => product.id === parseInt(id))
  
  useEffect(() => {
    if (currentProduct.length > 0 && wishList.length > 0  ) {
      checkIfOnTheList(currentProduct[0].id, wishList, setIsOnWishList)
    }
    else if (currentProduct.length > 0 && shoppingBag.length > 0  ) {
      checkIfOnTheList(currentProduct[0].id, shoppingBag, setIsOnShoppingBag)
    }
  }
  ,[])

  const handleWishListClick = (e) => {
    if (currentProduct.length > 0) {
      handleList(currentProduct[0].id, wishList, setWishList, setIsOnWishList, e.target.id)
    }
  }

  const handleShoppingBagClick = (e) => {
    if (currentProduct.length > 0) {
      handleList(currentProduct[0].id, shoppingBag, setShoppingBag, setIsOnShoppingBag, e.target.id)
    }
  }

  const renderedProduct = () => {
    if (currentProduct.length > 0) {
      const {id, title, price, description, image, rating: {rate}} = currentProduct[0]
      return (
        <div className="Product">
         <div className="product-info">
           <h1>{title}</h1>
           <h2>{price} $</h2>
           <div>
            <h3>Product's information</h3>
            <p>{description}</p>
            <p>SKU: {id}</p>
           </div>
           {!isOnShoppingBag &&
           <Button 
              handleClick={handleShoppingBagClick} 
              id="shoppingBag"
              className="black-button"
              text="Add To Bag"
              iconName=""
              />
           }

           {isOnShoppingBag &&
           <Button 
              handleClick={handleShoppingBagClick} 
              id="shoppingBag"
              className="black-button"
              text="Remove From Bag"
              iconName=""
              />
           }

           {!isOnWishList &&
              <Button 
              handleClick={handleWishListClick} 
              id="wishList"
              className="white-button"
              text="Add To Wishlist"
              iconName="favorite"
              />
           }

           {isOnWishList &&
              <Button 
              handleClick={handleWishListClick} 
              id="wishList"
              className="black-button"
              text="Remove From Wishlist"
              iconName="favorite"
              />
           }
           
         </div>
         <div className="image-container">
           <img src={image} alt={title}/>
         </div>
         
        </div>  
     
      )
    }
  }


  return (
    <>
    {renderedProduct()}
    </>
  )
}