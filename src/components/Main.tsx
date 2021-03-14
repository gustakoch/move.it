import { useContext, useEffect, useState } from 'react';
import Head from 'next/head'

import { ChallengesContext } from '../contexts/ChallengesContext';

import { CompletedChallenges } from "./CompletedChallenges";
import { ExperienceBar } from "./ExperienceBar";
import { ChallengeBox } from './ChallengeBox';
import { Countdown } from "./Countdown";
import { Loading } from './Loading';
import { Profile } from './Profile';

import styles from '../styles/modules/Main.module.css'

export default function Main() {
  const { loadingData } = useContext(ChallengesContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Main | move.it</title>
      </Head>

      <ExperienceBar />

      {loadingData && <Loading />}

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
    </div>
  )
}
