import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import axios from 'axios'
import dummy from 'assets/images/download.png'
import Excercise from 'components/Excercise'
import ActiveExcercise from 'components/ActiveExcercise'

function Dashboard() {
  const avatarWrapper = 'h-[4rem] w-[4rem] relative rounded-full'
  const avatar = 'rounded-full'
  const test = 'hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[1rem] duration-300 ...'
  const headTab = "w-full rounded-2xl border bg-white"
  const wrapper = 'mt-[1rem] border flex flex-col rounded-2xl p-[0.5rem]'
  const headButtons = 'mx-[0.5rem] my-[0.5rem] bg-white text-black border rounded-2xl p-[0.6rem] transition ease-in-out delay-150 hover:bg-black hover:text-white hover:scale-105 duration-300 ...'
  
  const { data: session, status } = useSession()
  
  const bgColors = ['bg-blue-500','bg-green-700','bg-yellow-600','bg-purple-700','bg-red-700']
  
  const colorLoop = (arr) => {
   return arr [Math.floor(Math.random() * arr.length)];
``}

  // gymday get gets the gym day data, post create gymday . put end gymday

  const getter = (url) => axios.get(url).then((res) => res.data)
  const gymday = useSWR('/api/user/gymday', getter)
  console.log({gymday})
  const { data: workout , error } = useSWR(`/api/workout/2`, getter)
  console.log({workout})

  console.log({data})


  const recordsTest = [
    {
      key:'1',
      workout:'squats',
      weight: '20lbs'
    },
    {
      key:'2',
      workout:'chest',
      weight: '20lbs'
    },
    {
      key:'3',
      workout:'shoulders',
      weight: '20lbs'
    },
    {
      key:'5',
      workout:'pull ups',
      weight: '20lbs'
    },
    {
      key:'6',
      workout:'squats',
      weight: '20lbs'
    },
    {
      key:'7',
      workout:'squats',
      weight: '20lbs'
    },
  ]
  


  return (
    <div className="flex flex-col p-[1rem] justify-center border lg:w-[87%]">
      <div className={headTab}>
        <div className="align-center flex flex-col items-start md:flex-row md:justify-between lg:flex-row  lg:justify-between bg-white p-[1.2rem]">
          <div className="flex flex-row items-center justify-center ">

            <div className={avatarWrapper}>
              <Image

                src={session ? session.user.image : dummy}

                alt="Avatar"
                layout="fill"
                className={avatar}
              />

            </div> 
            <div className='flex flex-col items-start justify-start ml-5'>

              <h3 className='text-[1.7rem] font-bold'>{`Hello, ${session? session.user.name : `username`}.`}</h3>
              <p>streaks</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <button className={headButtons}>browse workouts</button>
            <button className={headButtons}>start {`today's`} workout</button>
          </div>
        </div>
      </div>
      <div className={wrapper}>
        <h3 className='text-[1.5rem] font-bold self-start m-[1rem]'>Personal records</h3>
        <ul className='flex flex-col items-center justify-center md:flex-row '>
          {recordsTest.map((e)=>(
            <li key={e.key} className={`${colorLoop(bgColors)} text-white p-[1rem] m-[1rem] rounded-2xl w-full md:w-[13rem]`}>
              <p>{e.workout}</p>
              <h3 className='font-bold text-[1.2rem]'>{e.weight}</h3>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col items-start justify-center w-full">
          {data?.exercises?.map((exercise) => (
            <li key={exercise.id} className='flex-col justify-center border transition ease-in-out delay-150 p-[1rem] rounded-2xl my-[1rem] hover:-translate-y-1 hover:bg-white duration-300'>
              <Excercise exercise={exercise}/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Dashboard
