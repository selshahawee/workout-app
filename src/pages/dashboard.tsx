import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

function Dashboard() {
  const avatarWrapper = 'h-[2.5rem] w-[2.5rem] relative rounded-full'
  const avatar = 'rounded-full'
  const authedUserName = 'mx-[1rem] mt-[0.2rem] mb-0 text-xl font-semibold'
  const subText = ''
  const { data: session } = useSession()

  return (
    <div className="flex flex-col p-[2rem]">
      <div className="mt-[1rem] w-full">
        <div className="align-center flex flex-row justify-between bg-white p-[1.2rem] ">
          <div className="align center absolute right-0 mx-[1.5rem] mb-3 flex flex-row justify-center">
            <div className={avatarWrapper}>
              <Image
                src={session.user.image}
                alt="Avatar"
                layout="fill"
                className={avatar}
              />
              <div className='flex flex-col justify-start align-center'>
              <h2 className={authedUserName}>{`Hello ${session?.user.name}.`}</h2>
              <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
