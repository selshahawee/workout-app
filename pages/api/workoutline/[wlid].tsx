import { PrismaClient, Workout, Exercise } from '@prisma/client'
import {prisma } from "../prismaClient"
 prisma 

export default async function handle(req, res) {
  //todo: add auth support

  switch (req.method) {
    case 'GET':
      getWorkoutLineById(req, res)
      break
    case 'UPDATE':
      updateWorkoutLine(req, res)
      break
    case 'DELETE':
      deleteWorkoutLine(req, res)
      break
  }
}

async function getWorkoutLineById(req, res) {
  const { wlid } = req.query
  const workoutLine = await prisma.workoutLine.findUnique({
    where: { id: +wlid },
  })
  if (!workoutLine) {
    res.status(400).json({ msg: 'no workout Line found' })
  }
  res.status(200).json(workoutLine)
}

async function updateWorkoutLine(req, res) {
  try {
    const { wlid } = req.query
    const { sugWeight, sugSets, sugReps, steps } =
      req.body
    console.log({  sugWeight, sugSets, sugReps, steps })
    const updateWorkoutLine = await prisma.workoutLine.update({
      where: { id: wlid },
      data: {
        sugWeight,
        sugSets,
        sugReps,
        steps,
      },
    })
    res.status(200).json({ msg: 'workoutLine created', updateWorkoutLine })
  } catch (err) {
    res.status(400).json({ msg: 'something went wrong', details: err })
  }
}

async function deleteWorkoutLine(req, res) {
  try {
    const { wlid } = req.query
    const deleteWorkoutLine = await prisma.workoutLine.delete({
      where: { id: wlid },
    })
    res.status(200).json({ msg: 'workoutLine created', deleteWorkoutLine })
  } catch (err) {
    res.status(400).json({ msg: 'something went wrong', details: err })
  }
}
