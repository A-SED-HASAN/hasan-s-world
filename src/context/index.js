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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false)
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
    //here
  }

  const [isMute, setIsMute] = useLocalStorage('isMute', false)
  const toggleMute = () => {
    setIsMute((prev) => !prev)
  }

  const ctxValue = {
    isSidebarOpen,
    setIsSidebarOpen,
    toggleSidebar,
    toggleDarkMode,
    isDarkMode,
    isMute,
    toggleMute,
  }
  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
