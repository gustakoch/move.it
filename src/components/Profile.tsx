import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/modules/Profile.module.css'

export function Profile() {
  const { level, avatar, name } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt="Avatar"/>
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
