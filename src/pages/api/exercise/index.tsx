import { PrismaClient, Workout, Exercise } from '@prisma/client'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req, res) {

  //todo: add auth support

  switch (req.method) {
    case 'GET':
      getExercise(req, res)
      break
    case 'POST':
      createExercise(req, res)
      break
  }
}

async function getExercise(req, res) {
  const exercises = await prisma.exercise.findMany()
  if (exercises.length == 0) {
    res.status(400).json({ msg: 'no exercises' })
  }
  res.status(200).json(exercises)
}

async function createExercise(req, res) {
  try {
    const { name, description, videoUrl } = req.body
    console.log({name, description,videoUrl})
    const exercise = await prisma.exercise.create({
      data: {
        name,
        description,
        videoUrl,
      },
    })
    res.status(200).json({ msg: 'workout created', exercise })
  } catch (err) {
    res.status(400).json({ msg: 'something went wrong', details: err })
  }
}
