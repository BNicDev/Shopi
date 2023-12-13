import { createContext, useState } from 'react'

export const ShopiCartContext = createContext()

export const ShopiCartProvider = ({children}) => {
  //shopping cart- increment 
  const [counter, setCounter] = useState(0)

  //open- close
  const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
  const openProductDetail = () =>setIsProductDetailOpen(true)
  const closeProductDetail = () =>setIsProductDetailOpen(false)

   //open- close checkout
   const [ischecoutOpen, setIschecoutOpen ] = useState(false)
   const openChekout = () =>setIschecoutOpen(true)
   const closeCheckout = () =>setIschecoutOpen(false)
   console.log(ischecoutOpen)

  //product Detail- show product 
  const [productToShow, setProductToShow ] = useState({})

  //cart products
  const [cartProducts, setCartProducts ] = useState([])
  //my orders
  const [orders, setOrders] = useState([])


  return (
    <ShopiCartContext.Provider value={{
      counter,
      setCounter,
       openProductDetail,
       closeProductDetail,
       isProductDetailOpen,
       productToShow,
       setProductToShow,
       cartProducts,
       setCartProducts,
       openChekout,
      closeCheckout,
      ischecoutOpen,
      orders,
      setOrders
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}