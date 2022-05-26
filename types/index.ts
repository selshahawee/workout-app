import { Interface } from "readline"

export interface Workout {
  id: string
  name: String
  imgUrl: String
  exercises?: WorkoutLine[]
  gymDays?: GymDay[]
  exercises: WorkoutLine[]
  gymDays: GymDay[]
}

export interface Exercise {
  id: string
  name: string
  videoUrl: string
  description: string
  workouts: WorkoutLine[]
}

export interface WorkoutLine {
  id: string
  steps: number
  sugWeight: number
  sugSets: number
  sugReps: number
  exerciseId: string
  workoutId: string
  userlogs: UserLog[]
}
export interface UserLog {
  id: string
  weight: number
  reps: number
  setNumber: number
  date: number
  userId: string
  workoutLineId: string
}

export interface GymDay {
  id: string
  dateCreated: number
  activeWorkout: Boolean
  workoutStart: number
  workoutFinish: number
  workoutId: string
  userId: string
}

