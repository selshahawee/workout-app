import { User, Workout } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  workouts: [],
  user: {},
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setWorkouts: (state, { payload }: { payload: Workout[] }) => {
      state.workouts = payload
    },
    setUser: (state, { payload }: { payload: User }) => {
      state.user = payload
    },
  },
})

export const { setWorkouts, setUser } = appSlice.actions

export default appSlice.reducer
