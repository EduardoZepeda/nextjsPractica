
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const options: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    debug: true,
    session: {},
    jwt: {},
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'credentials',

            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin", value: "admin" },
                password: { label: "Password", type: "password", placeholder: "admin", value: "admin" }
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/credentials`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-type": "application/json" }
                })

                const user = await res.json()

                if (res.ok && user) {
                    return user
                }

                return null
            }
        }),
    ]
}

export default NextAuth(options);