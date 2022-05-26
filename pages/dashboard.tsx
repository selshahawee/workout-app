import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

function Dashboard() {
  const avatarWrapper = 'h-[4rem] w-[4rem] relative rounded-full'
  const avatar = 'rounded-full'
  const test = 'hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[1rem] duration-300 ...'

  const { data: session } = useSession()

  return (
    <div className="flex flex-col p-[1rem] justify-center border">
      <div className="mt-[1rem] w-full rounded-2xl border">
        <div className="align-center flex flex-col items-start md:flex-row md:justify-between lg:flex-row  lg:justify-between bg-white p-[1.2rem]">
          <div className="flex flex-row items-center justify-center ">
            <div className={avatarWrapper}>
              <Image
                src={session.user.image}
                alt="Avatar"
                layout="fill"
                className={avatar}
              />
            </div> 
            <div className='flex flex-col items-start justify-start ml-5'>
              <h3 className='text-[1.7rem] font-bold'>{`Hello, ${session.user.name}.`}</h3>
              <p>streaks</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <button className='mx-[0.5rem] my-[0.5rem] bg-white text-black border rounded-2xl p-[0.6rem] transition ease-in-out delay-150 hover:bg-black hover:text-white duration-300 ...'>browse workouts</button>
            <button className='border bg-black text-white rounded-2xl p-[0.6rem] my-[0.5rem] transition ease-in-out delay-150 hover:bg-white hover:text-black duration-300 ...'>start {`today's`} workout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard