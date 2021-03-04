import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

import { LevelUpModal } from '../components/LevelUpModal'
import challenges from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode,
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  exp: number
}

interface ChallengesContextDate {
  level: number,
  currentExperience: number,
  experienceToNextLevel: number,
  challengesCompleted: number,
  activeChallenge: Challenge
  startNewChallenge: () => void
  levelUp: () => void,
  resetChallenge: () => void,
  completeChallenge: () => void,
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextDate)

export function ChallengesProvider({ children, ...otherProps }: ChallengesProviderProps) {
  const [level, setLevel] = useState(otherProps.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(otherProps.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(otherProps.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🥳', {
        body: `Valendo ${challenge.exp}xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { exp } = activeChallenge
    let finalExperience = currentExperience + exp

    if (finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}

      {isModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
