import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallengesProvider } from '../contexts/ChallengesContext';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CoutdownProvider } from '../contexts/CoutdownContext';
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from "../components/Countdown";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
