import { ReactNode, useState } from "react"
import { createContext } from "react"

interface SideBarContextData {
  home: boolean,
  leaderboard: boolean,
  handleHomeButton: () => void,
  handleLeanderboardButton: () => void
}

interface SideBarProviderProps {
  children: ReactNode
}

export const SideBarContext = createContext({} as SideBarContextData)

export function SideBarProvider({ children }: SideBarProviderProps) {
  const [home, setHome] = useState(true)
  const [leaderboard, setLeaderboard] = useState(false)

  function handleHomeButton() {
    setHome(true)
    setLeaderboard(false)
  }

  function handleLeanderboardButton() {
    setHome(false)
    setLeaderboard(true)
  }

  return (
    <SideBarContext.Provider
      value={{
        home,
        leaderboard,
        handleHomeButton,
        handleLeanderboardButton
      }}
    >
      {children}
    </SideBarContext.Provider>
  )
}
