import { useData } from "../../../../context/Context"
import Button from "../../../Product/components/Button/Button";
import "./table.css"

const Table = ({setIsShoppingBagEmpty}) => {
  const {shoppingBag} = useData()
  shoppingBag.length > 0 ? setIsShoppingBagEmpty(true) : setIsShoppingBagEmpty(false)
  
  const header = ["SKU", "Title", "Price $", "QTY", "Total"];

  let totalAmount = 0
  let totalQty = 0

  const table = () => {
    return (
      <table>
        <thead>
         <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
        {shoppingBag.map(product => {
          totalAmount += product.price
          console.log(totalAmount)
          totalQty ++
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>1</td>
              <td>{product.price}</td>
            </tr>
          );
      } )}
        </tbody>
        <tfoot>
          <tr>
          <th></th>
        <th></th>
        <th></th>
        <th>{totalQty}</th>
        <th>{totalAmount}</th>
          </tr>
        </tfoot>
      </table>
      )
  }

  return (
  <>
  {table()} 
  </>
 )
}
export default Table