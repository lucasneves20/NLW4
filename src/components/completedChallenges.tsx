import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/completedChallenges.module.css'

export function CompletedChalenges() {
    const { challengesCompleted } = useContext(challengesContext)
    
    return(
        <div className={styles.completesChallengesContainer}>
            <span>Desafios completos </span><span>{challengesCompleted}</span>
        </div>
    )
}