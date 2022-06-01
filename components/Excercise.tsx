import React, { Fragment } from 'react'
import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Excercise({exercise}) {

  const dummyExerciseImage = "https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500"
  return (

  <Fragment>
    <div className="flex flex-row rounded-lg hover:bg-white-800">
    <div className="flex lg:w-[12rem]">
      <img
        className="object-cover w-full h-full rounded-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500"
        alt=""
      />
    </div>
    {/* <ul className='hidden lg:flex lg:flex-col lg:justify-center lg:items-center mx-[3rem]'>
      <li>
        {`suggested sets: ${exercise.sugSets}`}
      </li>
      <li>
        {`suggested weight: ${exercise.sugWeight}`}
      </li>
      <li>
        {`suggested reps: ${exercise.sugReps}`}
      </li>
    </ul> */}
    <div className="flex flex-col p-8 leading-normal">
      <h3 className="mb-2 font-bold tracking-tight text-black text-[1.2rem]">
        {exercise?.exercise.name}
      </h3>
      <p className="flex text-gray-500 w-[12rem] text-[0.8rem] my-[1rem] md:w-[23rem]">
        {exercise?.exercise.description}
      </p>
      <div className='flex items-center justify-end'>
          <span>check the full workout</span>
          <ChevronRightIcon/>
        </div>
    </div>

  </div>
  </Fragment>
  )
}

export default Excercise