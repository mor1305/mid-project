import React from "react";
import { useContext, useState, useEffect } from "react";
import { getProducts } from"../api/api"

const dataContext = React.createContext()

export function useData() {
  return useContext(dataContext)
}

export function DataProvider({children}) {
  const [productsData, setProductsData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  const [wishList, setWishList] = useState([])
  const [isOnWishList, setIsOnWishList] = useState(false)
  const [shoppingBag, setShoppingBag] = useState([])
  const [isOnShoppingBag, setIsOnShoppingBag] = useState(false)

  const checkIfOnTheList = (productId, list, setIsOnList) => {
    if (list.length > 0) {
      if (list.filter(product => parseInt(product.id) === parseInt(productId)).length ===0) {
        setIsOnList(false)
        return true
      } else {
        setIsOnList(true)
        return false
      }
    }
    }

  const handleList = (productId, list, setList, setIsOnList, elementId ) => {
    // setIsOnWishList(false)
    const updatedList = [...list]
    if(list.length === 0) {
      setIsOnList(true)
      updatedList.push(productsData.filter(product => parseInt(product.id) === parseInt(productId))[0])
      setList(updatedList)
      return true

    } else if (checkIfOnTheList(productId, list, setIsOnList)) {
      setIsOnList(true)
      updatedList.push(productsData.filter(product => parseInt(product.id) === parseInt(productId))[0])
      setList(updatedList)
      return true

    } else {
      setIsOnList(false)
      const remainingItems = updatedList.filter(pro => pro.id !== parseInt(productId))
      setList(remainingItems)
      return false

    }
  }

  useEffect( () => {
    async function getData() {
      try {
        const products = await getProducts();
        setProductsData(products)

        const categories = Array.from(new Set(products.map(product => product.category)))
        let categoryObject = {"ALL ITEMS": products}
        categories.forEach(
          category => {
            let productsArr = products.filter(pro => pro.category === category )
            categoryObject[category] = productsArr
          }
        )

        setCategoriesData(categoryObject)
       } catch (error) {
        console.log({ error });
      }
    } getData()},
  [])

  return (
    <dataContext.Provider value={{productsData, categoriesData, wishList, setWishList, handleList, isOnWishList, setIsOnWishList, checkIfOnTheList, shoppingBag, setShoppingBag, isOnShoppingBag, setIsOnShoppingBag}}>
      {children}
    </dataContext.Provider>
  )
}


