import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CoutdownContextData {
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCoutdown: () => void,
  resetCoutdown: () => void
}

interface CoutdownProviderProps {
  children: ReactNode
}

export const CoutdownContext = createContext({} as CoutdownContextData)

let coutdownTimeout: NodeJS.Timeout

export function CoutdownProvider({ children }: CoutdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCoutdown() {
    setIsActive(true)
  }

  function resetCoutdown() {
    clearTimeout(coutdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      coutdownTimeout = global.setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CoutdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCoutdown,
        resetCoutdown
      }}
    >
      {children}
    </CoutdownContext.Provider>
  )
}
