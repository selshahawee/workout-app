import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import DummyAvatar from '../images/dummy-avatar..png'
import { profile } from 'console'
import { signIn, signOut, useSession } from "next-auth/react";
function UserDropDown() {
  const avatarWrapper = 'h-[2.5rem] w-[2.5rem] relative rounded-full'
  const avatar = 'rounded-full'
  const authedUser =
    'flex flex-row justify-center align center absolute right-0 mx-[1.5rem] mb-3'
  const menuItemsList =
    'flex flex-col justify-center align-center-1rem rounded-2xl border w-[10rem] absolute right-0 mt-14 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-[1rem]'
  const profileItem = 'px-5 hover:bg-black hover:text-white hover:font-semibold rounded-t-md'
    const signOutItem = 'px-5 hover:bg-black hover:text-white hover:font-semibold rounded-b-md'
    const menuItemsData = [
    {
      name: 'Profile',
      action: () => {
          console.log(1)
      },
    },
    {
      name: 'Sign out',
      action: () => {
        console.log(2)
      },
    }
  ]
  const {data :session } = useSession();
  const authedUserName = 'mx-[1rem] mt-[0.2rem] mb-0 text-xl font-semibold'
  return (
    <Menu>
      <Menu.Button className={authedUser}>
        <p className={authedUserName}>{session.user.name}</p>
        <div className={avatarWrapper}>
          <Image
            src={session.user.image}
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
        <Menu.Items as="ul" className={menuItemsList}>
          <Menu.Item as = 'li' className={profileItem}>
            {({ active }) => (
                <a
                className={`${active && ''}`}
                href="/account-settings"
                >
                   Profile
                </a>
            )}
            </Menu.Item>
            <Menu.Item as = 'li' className={signOutItem} >
            {({ active }) => (
                <a
                className={`${active && ''}`}
                onClick={signOut}
                >
                   Sign out
                </a>
            )}
            </Menu.Item>
          {/* {menuItemsData.map((item) => (
            <Menu.Item
              as="li"
              className="px-10  hover:bg-black "
            >
              {({ active }) => (
                <a className={`${active && 'text-white font-semibold bg-black'}`} onClick={() => item.action()}>
                  {item.name}               
                </a>
              )}
            </Menu.Item>
          ))} */}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropDown