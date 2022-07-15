import { User } from 'next-auth'
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import bcrypt from 'bcrypt'

const credentials: NextApiHandler<User> = (request: NextApiRequest, response: NextApiResponse) => {

    if (request.method !== 'POST') {
        // Another method but POST is used
        response.status(405).end()
        return
    }
    const plainTextPassword = 'admin'
    // If we apply a cost of 10, and generate a random salt, admin is hashed to this
    // Harcoded hash is just for example purposes and shouldn't be used like this in a real project
    const hashedPassword = '$2b$10$.eM7Y4xM.gsKqf54N46Vg.2eg4MFQLy/AWEoNZizOE0hPCoevf1Ci'
    bcrypt.compare(plainTextPassword, hashedPassword, function (err, resolve) {
        // A error in the function ocurred
        if (err) {
            response.status(500).end()
        }
        else if (resolve) {
            // everything went well, let's return a user
            const TestUser: User = {
                id: '1',
                email: 'admin@example.org',
                name: 'John Doe',
                image: ''
            }
            response.status(200).json(TestUser)
        } else {
            // Credentials are invalid
            response.status(401).end()
        }
    })
}

export default credentials