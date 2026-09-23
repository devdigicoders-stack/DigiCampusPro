import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [selectedPortal, setSelectedPortal] = useState('admin')
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const openDemoModal = () => setIsDemoModalOpen(true)
  const closeDemoModal = () => setIsDemoModalOpen(false)

  return (
    <AppContext.Provider
      value={{
        selectedPortal,
        setSelectedPortal,
        isDemoModalOpen,
        setIsDemoModalOpen,
        openDemoModal,
        closeDemoModal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
