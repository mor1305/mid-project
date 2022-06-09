import { useData } from "../../../../context/Context"
import "./table.css"

const Table = ({setIsShoppingBagEmpty}) => {

  const {shoppingBag, setShoppingBag, setIsOnShoppingBag} = useData()

  shoppingBag.length > 0 ? setIsShoppingBagEmpty(true) : setIsShoppingBagEmpty(false)
  
  const header = ["", "SKU", "Title", "Price $", "QTY", "Total $"];

  let totalAmount = 0
  let totalQty = 0

  const handleXClick = (product) => {
    const updatedShoppingBag = shoppingBag.filter(item => item.id !== product.id)
    setShoppingBag(updatedShoppingBag)
    setIsOnShoppingBag(false)
  }

  const MyTable = () => {
    return (
      <table>
        <thead>
         <tr>{header.map((h, i) => <th key={i} id={`h-${i}`}>{h}</th>)}</tr>
        </thead>
        <tbody>
        {shoppingBag.map(product => {
          totalAmount += product.price
          totalQty ++
          return (
            <tr key={product.id}>
              <td className="remove" onClick={() => {handleXClick(product)}}>X</td>
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
            <th id="h-0"></th>
            <th></th>
            <th></th>
            <th></th>
            <th>{totalQty}</th>
            <th>{Math.round((totalAmount + Number.EPSILON) * 100) / 100}</th>
          </tr>
        </tfoot>
      </table>
      )
  }

  return (
  <>
  {MyTable()} 
  </>
 )
}
export default Table