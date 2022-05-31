import { PrismaClient, Workout, GymDay, User, UserLog } from '@prisma/client'
import { getSession } from 'next-auth/react'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req, res) {
  //todo: add auth support

  switch (req.method) {
    case 'POST':
      createUserLog(req, res)
      break
  }
}

//-----------Creat UserLog ----------------//


async function createUserLog(req, res) {
// const session = await getSession({ req })
// const userEmail = session.user.email
const userEmail='emad@elkadys.com'
const { weight, reps, workoutLineId, setNumber } = req.body

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  })
  if (!user) {
    res.status(400).json({ msg: `userID '${userEmail}' does not exist` })
  }

   if (!user.activeGymDay) {
     res.status(400).json({ msg: 'user has no active GymDay' })
   }

  const activeGymDay = await prisma.gymDay.findUnique({
    where: { id: user.activeGymDay },
  })

   const userLog = await prisma.userLog.create({
     data: {
       weight,
       reps,
       workoutLineId,
       userId:user.id,
       gymdayId:user.activeGymDay
     },
   })
//   res.status(200).json({ msg:req.method, user,activeGymDay })
  res.status(200).json(userLog)
}