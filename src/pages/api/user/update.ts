import { NowRequest, NowResponse } from '@vercel/node'
import jwtDecode from 'jwt-decode'

import { connectDatabase } from '../auth/connection'

interface GitHubTokenProps {
  email: string
}

export default async (request: NowRequest, response: NowResponse) => {
  const { 'next-auth.session-token': authToken } = request.cookies
  const { email } = jwtDecode<GitHubTokenProps>(authToken)

  const database = await connectDatabase(process.env.MONGODB_URI)
  const collection = database.collection('users')

  const user = await collection.findOne({ email })

  if (user) {
    const { level, currentExperience, challengesCompleted } = request.body

    await collection.updateOne({ email }, {$set :{
      level,
      currentExperience,
      challengesCompleted
    }})

    return response.json({ updated: true })
  }
}

