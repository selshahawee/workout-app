
import { PrismaClient, Workout, GymDay } from '@prisma/client'


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
    case 'UPDATE':
      updateGymDay(req, res)
      break
  }
}

 async function getGymDays(req, res) {

    const { uid } = req.body
    const user = await prisma.gymDay.findMany({
      where: { userId: uid },
    })


    if (!user) {
      res.status(400).json({ msg: `userID '${uid}' does not exist` })
    }
    res.status(200).json(user)

}
 async function createGymDay(req, res) {

    const { workoutId, userId } = req.body
console.log({workoutId, userId})
    const gymDay = await prisma.gymDay.create({
      data: {
        activeWorkout: true,
        workoutId: +workoutId,
        userId,
        
      },
    })
    res.status(200).json(gymDay)
  }


 async function updateGymDay(req, res) {

    // const { uid } = req.body
    // const user = await prisma.gymDay.findMany({
    //   where: { userId: uid },
    // })

    // if (!user) {
    //   res.status(400).json({ msg: `userID '${uid}' does not exist` })
    // }
    // res.status(200).json(user)
  }

