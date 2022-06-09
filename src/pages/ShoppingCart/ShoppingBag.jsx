import { useState } from "react";
import "./shoppingBag.css"
import Button from "../Product/components/Button/Button";
import Table from "./components/Table/Table";

export default function ShoppingBag() {
  const [isShoppingBagEmpty, setIsShoppingBagEmpty] = useState(true)

  return (
      <div className="shopping-bag">
        {isShoppingBagEmpty ? 
        <>
        <Table setIsShoppingBagEmpty={setIsShoppingBagEmpty}/>
        <Button 
              handleClick={console.log("confirm")} 
              id="confirm"
              className="black-button"
              text="Confirm Purchase"
              iconName=""
              />
              </>
              : <h3>There's nothing in your bag, yet...</h3>
        }
      </div>
  )
 }

