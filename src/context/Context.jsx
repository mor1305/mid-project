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
    <dataContext.Provider value={{productsData, categoriesData, wishList, setWishList}}>
      {children}
    </dataContext.Provider>
  )
}


