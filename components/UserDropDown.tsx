import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
// import DummyAvatar from 'assets/images/download'
import dummy from 'assets/images/download.png'
import { profile } from 'console'
import { signIn, signOut, useSession } from "next-auth/react";
function UserDropDown() {
  const avatarWrapper = 'h-[2.5rem] w-[2.5rem] relative rounded-full'
  const avatar = 'rounded-full'
  const authedUser =
    'flex flex-row justify-center align center absolute right-0 mx-[1.5rem] mb-3 '
    
  const {data :session } = useSession();
  const authedUserName = 'mx-[1rem] mt-[0.2rem] mb-0 text-xl font-semibold'
  return (
    <Menu>
      <Menu.Button className={authedUser}>
        <p className={authedUserName}>{session?.user.name}</p>
        <div className={avatarWrapper}>
          <Image
            src={session ? session.user.image : dummy}
            alt="Avatar"
            layout="fill"
            className={avatar}
          />
        </div>
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items as="ul" className='flex flex-col justify-center align-center-1rem rounded-2xl border w-[10rem] absolute right-0 left-[-12rem] mt-14 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-[1rem] md:left-[-15rem] lg:left-[65rem]'>
          <Menu.Item as = 'li' className='px-5 hover:bg-black hover:text-white '>
            {({ active }) => (
                <a
                className={`${active} && 'font-semibold rounded-t-md'`}
                href="/account-settings"
                >
                   Profile
                </a>
            )}
            </Menu.Item>
            <Menu.Item as = 'li' className='px-5 hover:bg-black hover:text-white hover:font-semibold rounded-b-md'>
            {({ active }) => (
                <button
                className={`${active}`}
                onClick={()=>signOut()}
                >
                   Sign out
                </button>
            )}
            </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropDown