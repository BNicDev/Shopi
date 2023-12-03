import { createContext, useState } from 'react'

export const ShopiCartContext = createContext()

export const ShopiCartProvider = ({children}) => {
  const [counter, setCounter] = useState(0)

  return (
    <ShopiCartContext.Provider value={{
      counter,
      setCounter
    }}>
      {children}
    </ShopiCartContext.Provider>
  )
}