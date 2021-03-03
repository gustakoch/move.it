import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { CoutdownContext } from '../contexts/CoutdownContext'

import styles from '../styles/modules/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCoutdown } = useContext(CoutdownContext)

  function handleCompleteChallenge() {
    completeChallenge()
    resetCoutdown()
  }

  function handleFailedChallenge() {
    resetChallenge()
    resetCoutdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.exp} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={handleFailedChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.completedButton}
              onClick={handleCompleteChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando os desafios propostos.
          </p>
        </div>
      )}
    </div>
  )
}
