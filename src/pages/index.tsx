import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'

import { Login } from '../components/Login'
import Main from '../components/Main'

interface IndexProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Index({ level, challengesCompleted, currentExperience }: IndexProps) {
  const [session, loading] = useSession()

  console.log(session)

  return (
    <>
      {!session ? (
        <Login />
      ): (
        <Main
          level={level}
          challengesCompleted={challengesCompleted}
          currentExperience={currentExperience}
          name={session.user.name}
          avatarUrl={session.user.image}
        />
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
