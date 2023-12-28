import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from 'react'
import { useLocalStorage } from '../hook'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage(
    'isSidebarOpen',
    false
  )
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const ctxValue = {
    isSidebarOpen,
    setIsSidebarOpen,
    closeSidebar,
  }
  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
