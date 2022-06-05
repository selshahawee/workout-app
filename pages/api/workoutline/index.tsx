import { PrismaClient, Workout, Exercise } from '@prisma/client'

import {prisma } from "../prismaClient"
 prisma 
export default async function handle(req, res) {

  //todo: add auth support

  switch (req.method) {
    case 'GET':
      getWorkoutLines(req, res)
      break
    case 'POST':
      createWorkoutLine(req, res)
      break
  }
}

async function getWorkoutLines(req, res) {
  const WorkoutLines = await prisma.workoutLine.findMany()
  if (WorkoutLines.length == 0) {
    res.status(400).json({ msg: 'no workout exercises' })
  }
  res.status(200).json(WorkoutLines)
}

async function createWorkoutLine(req, res) {
  try {
    const { workoutId, exerciseId, sugWeight,sugSets,sugReps,steps} = req.body
    console.log({ workoutId, exerciseId, sugWeight, sugSets, sugReps, steps })
    const workoutLine = await prisma.workoutLine.create({
      data: {
        workoutId,
        exerciseId,
        sugWeight,
        sugSets,
        sugReps,
        steps,
      },
    })
    res.status(200).json({ msg: 'workoutLine created', workoutLine })
  } catch (err) {
    res.status(400).json({ msg: 'something went wrong', details: err })
  }
}
