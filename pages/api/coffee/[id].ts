import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const coffeeCountry = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)

  response.setHeader('Content-type','application/json')
  response.status(200).json(entry)
}

export default coffeeCountry
