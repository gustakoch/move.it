import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

import { LevelUpModal } from '../components/LevelUpModal'
import challenges from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  exp: number
}

interface ChallengesContextDate {
  level: number,
  name: string,
  avatar: string,
  currentExperience: number,
  experienceToNextLevel: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  loadingData: boolean,
  startNewChallenge: () => void
  resetChallenge: () => void,
  completeChallenge: () => void,
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextDate)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [loadingData, setLoadingData] = useState(true)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()

    async function verifyLoggedUser() {
      const response = await axios.get('/api/user/verify')
      const {
        challengesCompleted,
        currentExperience,
        picture,
        level,
        name
      } = response.data

      setChallengesCompleted(challengesCompleted)
      setCurrentExperience(currentExperience)
      setAvatar(picture)
      setLevel(level)
      setName(name)

      setLoadingData(false)
    }

    verifyLoggedUser()
  }, [])

  useEffect(() => {
    async function updateUserData() {
      setLoadingData(true)

      const response = await axios.post('/api/user/update', {
        level,
        currentExperience,
        challengesCompleted
      })

      setLoadingData(false)
    }

    updateUserData()
  }, [level, currentExperience, challengesCompleted])

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

  async function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { exp } = activeChallenge
    let finalExperience = currentExperience + exp

    if (finalExperience >= experienceToNextLevel) {
      setLevel(level + 1)
      finalExperience = finalExperience - experienceToNextLevel
      setIsModalOpen(true)
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        name,
        avatar,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
        loadingData
      }}
    >
      {children}

      {isModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
