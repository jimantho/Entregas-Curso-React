import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (elemento) => {

    if (IsInCart(elemento)) {
      let nuevoArray = cart.map((element) => {
        if (element.name === elemento.name) {
          let nuevoElemento = {
            ...element,
            quantity: elemento.quantity
          }
          return nuevoElemento
        } else {
          return element
        }
      })
      setCart(nuevoArray)

    } else {
      setCart([...cart, elemento])
    }
  }

  const IsInCart = (item) => {
    return cart.some(elemento => elemento.name === item.name)
  }

  const clearCart = () => {
    setCart([])
  }
  const getQuantityById = (name) => {
    const product = cart.find(elemento => elemento.name === name);
    return product?.quantity
  }

  const getTotalPrice = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + (elemento.price * elemento.quantity)
    }, 0)
    return total
  }
  // otra forma PARA CALCULA PRECIO TOTAL 
  /*   let acc = 0;
    for (let i = 0; i < cart.length; i++) {
      acc = acc + cart[i].price * cart[i].quantity
    }
    return acc */
  const deleteProductoById = (id) => {
    console.log(id)
    const newArray = cart.filter(product => product.id !== id)
    setCart(newArray)
  }


  const data = {
    cart,
    setCart,
    addToCart,
    clearCart,
    getQuantityById,
    getTotalPrice,
    deleteProductoById,
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

