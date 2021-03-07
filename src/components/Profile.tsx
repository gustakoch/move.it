import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useSession } from 'next-auth/client'

import styles from '../styles/modules/Profile.module.css'

interface ProfileProps {
  name: string,
  avatarUrl: string
}

export function Profile({ name, avatarUrl }: ProfileProps) {
  const { level } = useContext(ChallengesContext)
  const [session, loading] = useSession()

  return (
    <div className={styles.profileContainer}>
      <img src={avatarUrl} alt="Avatar"/>
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
