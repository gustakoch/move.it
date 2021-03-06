import styles from '../styles/modules/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <img src="/images/brand.png" alt="Marca D'agua"/>
      </div>
      <div className={styles.rightContainer}>
        <img src="/images/logo.png" alt="Logo"/>

        <h2>Bem vindo</h2>

        <div className={styles.githubBox}>
          <img src="/images/github.png" alt="Github"/>
          <p>Faça login com seu usuário do GitHub para começar</p>
        </div>

        <div className={styles.inputGroup}>
          <input type="text" name="user" placeholder="Digite seu usuário"/>
          <button type="button">
            <img src="/icons/arrow-right.png" alt="Entrar"/>
          </button>
        </div>
      </div>
    </div>
  )
}
