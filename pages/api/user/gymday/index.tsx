import { PrismaClient, Workout, GymDay, User } from '@prisma/client'
import { getSession } from 'next-auth/react'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req, res) {
  //todo: add auth support

  switch (req.method) {
    case 'GET':
      getGymDays(req, res)
      break
    case 'POST':
      createGymDay(req, res)
      break
    case 'PUT':
      updateGymDay(req, res)
      break
  }
}
    // const session = await getSession({ req })
    // const userEmail = session.user.email
    const userEmail = 'omartareketman@gmail.com'
async function getGymDays(req, res) {

  // const session = await getSession({ req })
  // const userEmail = session.user.email
  const userEmail = 'omartareketman@gmail.com'


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
    where: { id:user.activeGymDay}
  })

  res.status(200).json( activeGymDay)
}

//--------------------------------//

async function createGymDay(req, res) {
  const { workoutId, userId } = req.body

  // const session = await getSession({ req })
  // const userEmail = session.user.email
  const userEmail = 'omartareketman@gmail.com'


  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  })

  if (!user) {

    res.status(400).json({ msg: `user with email:'${userEmail}' does not exist` })

  }
  if (user.activeGymDay) {
    res
      .status(400)
      .json({ msg: `cannot create gymDay, '${userEmail}' has active gymDay` })
  }
  const gymDay = await prisma.gymDay.create({
    data: {
      activeWorkout: true,
      workoutId: +workoutId,
      userId,
    },
  })
  const updateActiveGymDay = await prisma.user.update({
    where: { email: userEmail },
    data: {
      activeGymDay: gymDay.id,
      activeWorkoutID: +workoutId,
    },
  })

  res
    .status(200)
    .json({
      msg: `GymDay started on ${gymDay.dateCreated} for workout id ${gymDay.workoutId}`,
      gymDay: gymDay,
    })
}


//------------------------------//

async function updateGymDay(req, res) {
  // const session = await getSession({ req })
  // const userEmail = session.user.email
  const userEmail = 'omartareketman@gmail.com'


  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  })

  if (!user) {
    res.status(400).json({ msg: `userID '${userEmail}' does not exist` })
  }
  if (!user.activeGymDay) {
    res.status(400).json({ msg: `userID '${userEmail}' has no active Gymdays` })
  }
  const closeGymDay = await prisma.gymDay.update({
    where: { id: user.activeGymDay },
    data: {
      activeWorkout: false,
      workoutFinish: new Date(),
    },
  })

  const removeUserActiveGymDay = await prisma.user.update({
    where: { email: userEmail },
    data: {
      activeGymDay: null,
      activeWorkoutID: null,
    },
  })

  res
    .status(200)

    .json({
      msg: `GymDay concluded successfully on ${closeGymDay.workoutFinish}.. see you next time :)`,
    })

}
