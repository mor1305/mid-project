import { useState } from "react"
import { useData } from "../../context/Context"
import Button from "./components/Button/Button"
import "./product.css"

export default function Product({match: {params : {id}}}) {
  const [isInWishList, setIsInWishList] = useState()
  const {productsData, wishList, setWishList} = useData()
  const currentProduct = productsData.filter(product => product.id === parseInt(id))
  const updatedWishList = [...wishList]

  const handleClick = () => {
    // setIsInWishList(false)
    if (currentProduct.length > 0 && updatedWishList.length === 0) {
      updatedWishList.push(currentProduct[0])
      setIsInWishList(true)
      setWishList(updatedWishList)
    } else if (currentProduct.length) {
      let checkIfOnTheList = updatedWishList.filter(pro => pro.id === parseInt(id))
      if (checkIfOnTheList.length === 0) {
        updatedWishList.push(currentProduct[0])
        setIsInWishList(true)
        setWishList(updatedWishList)
      } else {
        const remainingItems = updatedWishList.filter(pro => pro.id !== parseInt(id))
        setIsInWishList(false)
        setWishList(remainingItems)
      }
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
           <Button 
              handleClick={handleClick} 
              className="black-button"
              text="Add To Bag"
              iconName=""
              />

           {!isInWishList &&
              <Button 
              handleClick={handleClick} 
              className="white-button"
              text="Add To Wishlist"
              iconName="favorite"
              />
           }

           {isInWishList &&
              <Button 
              handleClick={handleClick} 
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