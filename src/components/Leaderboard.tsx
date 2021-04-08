import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import styles from '../styles/modules/Leaderboard.module.css'

export function Leaderboard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getAllUsers() {
      const response = await axios.get('/api/user/all')

      setUsers(response.data)
    }

    getAllUsers()
  }, [])

  return (
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Leaderboards | move.it</title>
      </Head>

      <h1>Leaderboards</h1>

      <div className={styles.leaderboardSubstitles}>
        <span className={styles.position}>Posição</span>
        <span className={styles.user}>Usuário</span>
        <span className={styles.challenges}>Desafios</span>
        <span className={styles.xp}>Experiência</span>
      </div>

      {users.map(user => (
        <div className={styles.userRow}>
          <span>1</span>
          <div className={styles.userBox}>
            <div className={styles.userInfo}>
              <img src={user.picture} alt="Avatar"/>
              <div>
                <strong>{user.name}</strong>
                <p>
                  <img src="icons/level.svg" alt="Level Up"/>
                  Level {user.level}
                </p>
              </div>
            </div>
            <div className={styles.boxChallengesXp}>
              <div className={styles.userChallengesCompleted}>
                <span>{user.challengesCompleted}</span>
                <span> completados</span>
              </div>
              <div className={styles.userXp}>
                <span>{user.currentExperience}</span>
                <span> xp</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
