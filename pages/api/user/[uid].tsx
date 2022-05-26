import { PrismaClient } from '@prisma/client'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req, res) {
  if (req.method === 'GET') {
      const {uid}=req.query
    const user = await prisma.user.findUnique({

        where:{id:uid},include: { gymDays: true,userLogs:true }})

    if (!user) {
      res.status(400).json({ msg: `userID '${uid}' does not exist` })
    }
    res.status(200).json(user)

   }
}
