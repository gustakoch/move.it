import { GetServerSideProps } from 'next'
import { useContext } from 'react'
import { useSession } from 'next-auth/client'

import { Leaderboard } from '../components/Leaderboard'
import { SideBar } from '../components/SideBar'
import { Login } from '../components/Login'
import Main from '../components/Main'

import { SideBarContext, SideBarProvider } from '../contexts/SideBarContext'

interface IndexProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Index({ level, challengesCompleted, currentExperience }: IndexProps) {
  const { home, leaderboard } = useContext(SideBarContext)
  const [session] = useSession()

  return (
    <>
      {!session ? (
        <Login />
      ): (
        <>
          <SideBar />

          {home && !leaderboard ? (
            <Main
              level={level}
              challengesCompleted={challengesCompleted}
              currentExperience={currentExperience}
              name={session.user.name}
              avatarUrl={session.user.image}
            />
          ) : (
            <Leaderboard />
          )}
        </>
      )}
    </>
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
