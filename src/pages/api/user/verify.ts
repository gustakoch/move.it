import { NowRequest, NowResponse } from '@vercel/node'
import jwtDecode from 'jwt-decode'

import { connectDatabase } from '../auth/connection'

interface GitHubTokenProps {
  name: string,
  email: string,
  sub: string,
  picture: string
}

export default async (request: NowRequest, response: NowResponse) => {
  const { 'next-auth.session-token': authToken } = request.cookies

  if (!authToken) {
    return response.status(401).json({
      error: true,
      message: 'Não foi encontrado nenhum token de autenticação'
    })
  }

  const { name, email, picture, sub: githubId } = jwtDecode<GitHubTokenProps>(authToken)

  const database = await connectDatabase(process.env.MONGODB_URI)
  const collection = database.collection('users')

  const user = await collection.findOne({ email })

  if (user) {
    return response.status(200).json(user)
  }

  await collection.insertOne({
    githubId,
    email,
    name,
    picture,
    level: 1,
    challengesCompleted: 0,
    currentExperience: 0,
    createdAt: new Date()
  })

  return response.status(201).json({
    name,
    picture,
    level: 1,
    challengesCompleted: 0,
    currentExperience: 0,
  })
}
