import React, { Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useFormik } from 'formik'
import Checkbox from '@mui/material/Checkbox'


// type props = {
//   excercise:Excercise
// }

// {
//   "weight":1,
//   "reps":3,
//   "workoutLineId":1,

// }

// /api/user/log
// post method

function ActiveExcercise({ exercise }) {
  const videoContainer =
    'relative w-full h-[27rem] rounded-2xl mb-[0.75rem] rounded-2xl border'
  const caption =
    'transition duration-150 ease-out hover:ease-in my-4 text-gray-600'
  const card =
    'flex-col justify-center border transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-white duration-300'
  const cardTextContainer = ''
  const workoutName = 'font-bold'
  const workoutPic = 'w-full object-fill'
  const excerciseName = 'font-bold text-[1.2rem] my-[0.5rem]'
  const excerciseDescription = 'mb-[1rem] flex min-w-[22rem] max-w-[50rem]'
  // className={videoContainer}

  const [checked, setChecked] = useState(false);

  const  checkExcercise= (e) => {
    console.log('done');
    setChecked(true)
    
  };

  const checkSet = (e) => {
    console.log('done');
    //the api call to update the user log
  }

  return (
    <Fragment>
      {/* <div className={videoContainer}> */}
        <iframe src={exercise?.exercise.videoUrl} title={exercise?.exercise.name} allow='autoPlay'className='w-full'/>
      {/* </div> */}
      <h2 className={excerciseName}>{exercise?.exercise.name}</h2>
      <p className={excerciseDescription}>{exercise?.exercise.description}</p>
      <div className = 'flex flex-row justify-start items-center'>
      <p>
        {' '}
        {exercise?.sugSets} sets x {exercise?.sugReps} reps
        <Checkbox onChange={(e) => checkExcercise(e)}/>
      </p>
    </div>
      <div className='bg-white hover:bg-gray-200 w-full rounded-2xl'>
        <form className='flex flex-col items-center justify-center lg:items-stretch'>
          {Array.from(Array(exercise?.sugSets).keys()).map((e) => (
            //will need an api call on =Click for updating the userLog
            <div className='flex flex-row justify-around items-center' key={e}>
              <span>set {e + 1}: </span>
              <label>
                <span className='mx-3'>Reps:</span>
                <input key={e} value={exercise?.sugReps} className='mr-[0.5rem] rounded-2xl w-[3rem] md:w-[4rem] lg:w-[8rem]'/>
              </label>
              <label>
                <span className='mx-3'>Sets:</span>
                <input key={e} value={exercise?.sugWeight} className='mr-[0.5rem] rounded-2xl w-[3rem] md:w-[4rem] lg:w-[8rem]'/>
              </label>
              <input type="hidden" name="workoutLineId" value={exercise?.id} />
              <input
                type="hidden"
                name="workoutId"
                value={exercise?.exerciseId}
              />
              <Checkbox onChange={(e) => checkSet(e)}/>
            </div>
          ))}
        </form>
      </div>
    </Fragment>
  )
}

export default ActiveExcercise

