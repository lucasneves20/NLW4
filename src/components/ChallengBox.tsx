import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(challengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completedChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }
  return (
    <div className={styles.challengBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type='button' className={styles.challengFaileButton} onClick={handleChallengeFailed}>Falhei</button>
            <button type='button' className={styles.challengSucceededButton } onClick={handleChallengeSucceeded}>Consegui</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengBoxNotActive}>
            <strong>finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de levels completando desafios
                    </p>
          </div>
        )}
    </div>
  )
}