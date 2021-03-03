import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CoutdownProvider } from '../contexts/CoutdownContext';
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from "../components/Countdown";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
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
          </div>
        </section>
      </CoutdownProvider>
    </div>
  )
}
