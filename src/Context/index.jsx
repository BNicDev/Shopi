import { createContext, useState } from 'react'
import { useEffect } from 'react'


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

  //get products 
  const [items, setItems] = useState(null)
  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  console.log(searchByTitle)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data=>setItems(data))
  },[])


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
      setOrders,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle

    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}