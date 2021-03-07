import { signOut } from 'next-auth/client'
import Head from 'next/head'

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CoutdownProvider } from '../contexts/CoutdownContext';

import { CompletedChallenges } from "./CompletedChallenges";
import { ExperienceBar } from "./ExperienceBar";
import { ChallengeBox } from './ChallengeBox';
import { Countdown } from "./Countdown";
import { Profile } from './Profile';

import styles from '../styles/modules/Main.module.css'

interface MainProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  name: string,
  avatarUrl: string
}

export default function Main(props: MainProps) {
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
              <Profile
                name={props.name}
                avatarUrl={props.avatarUrl}
              />
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
