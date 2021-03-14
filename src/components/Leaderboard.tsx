import Head from 'next/head'

import styles from '../styles/modules/Leaderboard.module.css'

export function Leaderboard() {
  return (
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Leaderboards | move.it</title>
      </Head>

      <h1>Leaderboard</h1>

      <div className={styles.leaderboardSubstitles}>
        <span className={styles.position}>Posição</span>
        <span className={styles.user}>Usuário</span>
        <span className={styles.challenges}>Desafios</span>
        <span className={styles.xp}>Experiência</span>
      </div>

      <div className={styles.userRow}>
        <span>1</span>
        <div className={styles.userBox}>
          <div className={styles.userInfo}>
            <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Avatar"/>
            <div>
              <strong>Diego Fernandes</strong>
              <p>
                <img src="icons/level.svg" alt="Level Up"/>
                Level 16
              </p>
            </div>
          </div>
          <div className={styles.boxChallengesXp}>
            <div className={styles.userChallengesCompleted}>
              <span>127454</span>
              <span> completados</span>
            </div>
            <div className={styles.userXp}>
              <span>1246000</span>
              <span> xp</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userRow}>
        <span>2</span>
        <div className={styles.userBox}>
          <div className={styles.userInfo}>
            <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Avatar"/>
            <div>
              <strong>Diego Fernandes</strong>
              <p>
                <img src="icons/level.svg" alt="Level Up"/>
                Level 16
              </p>
            </div>
          </div>
          <div className={styles.boxChallengesXp}>
            <div className={styles.userChallengesCompleted}>
              <span>127454</span>
              <span> completados</span>
            </div>
            <div className={styles.userXp}>
              <span>1246000</span>
              <span> xp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
