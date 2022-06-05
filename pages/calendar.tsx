import CalenderComp from 'components/CalenderComp'
import React from 'react'

function Calender() {
  return (

    <div className=" flex justify-around grid-flow-col flex-col-reverse auto-cols-max justify-items-center bg-gray-100 p-5  pt-8 lg:grid">
      
      

      <div className="flex flex-col justify-items-center ">
      <h1 className="text-xl font-bold p-5 ">Workout History</h1>
        <div className=" hover:bg-white-800 m-4 flex justify-start p-[1rem] justify-around  rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700  md:max-w-xl  md:flex-row  ">
          <div className="flex jutify-start">
            <span>date</span>
          </div>
          <div>
          <span>Workout</span>
          </div>
        </div>

        <div className="  hover:bg-white-800 m-4 flex rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 md:max-w-xl md:flex-row ">
          <div className="grid grid-cols-1  ">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500"
              alt=""
            />
          </div>
          <div className="flex flex-col p-8  leading-normal  w-80">
            <h3 className="mb-2  font-bold tracking-tight text-black">
              squats
            </h3>
            <ul className="text-gray-500 grid grid-col auto-cols-max">
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
            </ul>
          </div>
        </div>

        <div className=" hover:bg-white-800 m-4 flex rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 md:max-w-xl md:flex-row ">
          <div className="grid grid-flow-col ">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500"
              alt=""
            />
          </div>
          <div className="flex flex-col p-8  leading-normal">
            <h3 className="mb-2  font-bold tracking-tight text-black">
              squats
            </h3>
            <ul className="text-gray-500">
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
            </ul>
          </div>
        </div>
        <div className=" hover:bg-white-800 m-4 flex rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 md:max-w-xl md:flex-row ">
          <div className="grid grid-flow-col ">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1609899517237-77d357b047cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500"
              alt=""
            />
          </div>
          <div className="flex flex-col p-8  leading-normal">
            <h3 className="mb-2  font-bold tracking-tight text-black">
              squats
            </h3>
            <ul className="text-gray-500">
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
              <li>10 reps 5 sets</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex ">
        <CalenderComp />
      </div>
    </div>

  )
}

export default Calender
