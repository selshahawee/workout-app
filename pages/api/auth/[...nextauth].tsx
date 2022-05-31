import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default (req, res) =>
  NextAuth(req, res, {
    secret: process.env.NEXTAUTH_SECERT,
    adapter: PrismaAdapter(prisma),
    debug: true,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    pages: {
      newUser: '/signup/newuser',
    },
  })
