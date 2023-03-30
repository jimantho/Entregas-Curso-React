import { CustomItemCount } from "./CustomItemCount.js"
import { useEffect, useState } from 'react'



<<<<<<< HEAD
const ItemCount = ({ stock , inicial = 0, onAdd }) => {

/*   const [counter, setCounter] = useState(stock !== 0 ? inicial : 0); */
  const [counter, setCounter] = useState(inicial);

  console.log(stock)
=======
const ItemCount = ({ stock, inicial, onAdd }) => {
>>>>>>> 84c4f19be20e055f106b2e655d378d9dbbff5611

  useEffect(() => {
    setCounter(inicial)
  }, [inicial])

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter);
  }

  const restar = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(counter)
  }

  return (
    <div>
      <CustomItemCount
        counter={counter} setDescripcionStock={stock === 0 ? "Sin Stock" : "Stock Disponible"} sumar={sumar} restar={restar} onAdd={onAdd} ></CustomItemCount>
    </div>
  )
}

export default ItemCount
