import { PrismaClient } from '@prisma/client'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function getGymDays(req, res) {
  if (req.method === 'GET') {
    const { uid } = req.body
    const user = await prisma.gymDay.findMany({
      where: { userId:uid }})
   
    if (!user) {
      res.status(400).json({ msg: `userID '${uid}' does not exist` })
    }
    res.status(200).json(user)
  }
}
