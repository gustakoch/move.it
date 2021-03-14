import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/modules/Loading.module.css'

export function Loading() {
  const { level, avatar, name } = useContext(ChallengesContext)

  return (
    <div className={styles.overlayContainer}>
      <div>
        Carregando aplicação...
      </div>
    </div>
  )
}
