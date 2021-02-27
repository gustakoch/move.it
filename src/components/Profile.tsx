import styles from '../styles/modules/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gustakoch.png" alt="Avatar"/>
      <div>
        <strong>Gustavo Koch</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
