// context/AppContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false)
  const [darkMode, setDarkMode] = useState(false) // Example additional state

  // Check screen width on mount/resize
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    
    return () => window.removeEventListener('resize', checkScreenWidth)
  }, [])

  // Example toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const value = {
    isMobile,
    darkMode,
    toggleDarkMode
    // Add more states/functions as needed
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for easy access
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}