import Head from 'next/head'
import { signIn } from 'next-auth/client'

import styles from '../styles/modules/Login.module.css'

export function Login() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <div className={styles.leftContainer}>
        <img src="/images/brand.png" alt="Marca D'agua"/>
      </div>
      <div className={styles.rightContainer}>
        <img src="/images/logo.png" alt="Logo"/>

        <h2>Bem vindo</h2>

        <div className={styles.githubBox}>
          <p>Faça login com a sua conta do GitHub para começar</p>
        </div>

        <button onClick={() => signIn('github')}>
          <img src="/images/github.png" alt="Github"/>
          Login com GitHub
        </button>
      </div>
    </div>
  )
}
