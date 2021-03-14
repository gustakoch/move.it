import { MongoClient, Db } from 'mongodb'

let cachedDatabase: Db = null

export async function connectDatabase(uri: string) {
  if (cachedDatabase)
    return cachedDatabase

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const databaseName = new URL(uri).pathname.substr(1)
  const database = client.db(databaseName)

  cachedDatabase = database

  return database
}
