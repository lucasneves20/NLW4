import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/profile.module.css'

export function Profile() {
    const { level } = useContext(challengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/webMasterAlumni.png" alt="Web Master"/>
            <div>
                <strong>Web Master</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    level {level}
                </p>
            </div>
        </div>
    )
}