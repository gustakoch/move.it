import { signOut } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CompletedChallenges } from "./CompletedChallenges";
import { CoutdownProvider } from '../contexts/CoutdownContext';
import { ExperienceBar } from "./ExperienceBar";
import { ChallengeBox } from './ChallengeBox';
import { Countdown } from "./Countdown";
import { Profile } from './Profile';

import styles from '../styles/modules/Main.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Main(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Main | move.it</title>
        </Head>

        <ExperienceBar />

        <CoutdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
              <button onClick={() => signOut()}>Sair</button>
            </div>
          </section>
        </CoutdownProvider>
      </div>
    </ChallengesProvider>
  )
}
