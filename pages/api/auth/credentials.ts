import { User } from 'next-auth'
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

const credentials: NextApiHandler<User> = (request: NextApiRequest, response: NextApiResponse) => {

    if (request.method !== 'POST') {
        // Another method but POST is used
        response.status(405).end()
        return
    }

    if (request.body.password === 'admin' && request.body.username === 'admin') {
        // This is a placeholder for authentication, please don't use this, ever
        const TestUser : User = {
            id: '1',
            email: 'admin@example.org',
            name: 'John Doe',
            image: ''
        }
        return response.status(200).json(TestUser)
    }
    response.status(401).end()
}

export default credentials