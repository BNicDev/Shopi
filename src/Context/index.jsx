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

  //product Detail- show product 
  const [productToShow, setProductToShow ] = useState({})

  //cart products
  const [cartProducts, setCartProducts ] = useState([])
  //my orders
  const [orders, setOrders] = useState([])

  //get products 
  const [items, setItems] = useState(null)
  //filtrado por titulo
  const [filteredItems, setFilteredItems] = useState(null)
  console.log('filtered:', filteredItems)
  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  //get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data=>setItems(data))
  },[])

  const filteredItemsByTitle =(items, searchByTitle)=>{
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  const filteredItemsByCategory =(items, searchByCategory)=>{
    console.log(items)
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }
const filterBy=(searchtype, items, searchByTitle, searchByCategory)=>{
  if(searchtype==='BY_TITLE'){
    return filteredItemsByTitle(items, searchByTitle)
  }
  if(searchtype==='BY_CATEGORY'){
    return filteredItemsByCategory(items, searchByCategory)
  }
  if(searchtype==='BY_TITLE_AND_BY_CATEGORY'){
    return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  if(!searchtype){
    return items
  }
}

  useEffect(()=>{
    if(searchByCategory && searchByTitle ) setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory ) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle,searchByCategory))
    if(searchByCategory && !searchByTitle ) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
    if(!searchByCategory && !searchByTitle ) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))
  },[items, searchByCategory,searchByTitle])


  // console.log(filteredItems)


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
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
      searchByCategory,
      setSearchByCategory

    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}