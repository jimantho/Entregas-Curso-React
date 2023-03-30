import { CustomItemCount } from "./CustomItemCount.js"
import { useEffect, useState } from 'react'



const ItemCount = ({ stock, inicial, onAdd }) => {

  const [counter, setCounter] = useState(stock !== 0 ? inicial : 0);
  
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
