import { NowRequest, NowResponse } from '@vercel/node'

export default async (request: NowRequest, response: NowResponse) => {
  const { error } = request.query

  if (error) {
    return response.redirect('/')
  }
}
