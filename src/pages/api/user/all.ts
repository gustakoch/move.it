import { NowRequest, NowResponse } from '@vercel/node'
import { connectDatabase } from '../auth/connection'

export default async (request: NowRequest, response: NowResponse) => {
  const database = await connectDatabase(process.env.MONGODB_URI)
  const collection = database.collection('users')

  const users = await collection.find({}).toArray()

  if (!users)
    return response.status(400).json({
      error: true,
      message: 'Não foram localizados registros'
    })

  return response.status(200).json(users)
}
