import { createContext, useState } from 'react'

export const ShopiCartContext = createContext()

export const ShopiCartProvider = ({children}) => {
  const [counter, setCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
  const openProductDetail = () =>setIsProductDetailOpen(true)
  const closeProductDetail = () =>setIsProductDetailOpen(false)
  console.log(isProductDetailOpen)

  return (
    <ShopiCartContext.Provider value={{
      counter,
      setCounter,
       openProductDetail,
       closeProductDetail,
       isProductDetailOpen
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}