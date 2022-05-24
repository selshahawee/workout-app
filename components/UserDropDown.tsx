import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import DummyAvatar from '../images/dummy-avatar..png'
function UserDropDown() {
  const avatarWrapper = 'h-[2.5rem] w-[2.5rem] relative rounded-full'
  const avatar = 'rounded-full'
  const authedUser = 'flex flex-row justify center align center'
  const menuItemsList = "flex flex-col justify center mt-1rem rounded-2xl border w-[10rem] px-[1rem] absolute right-0 mt-14 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-[1rem] h-[6rem]"
  const authedUserName = 'mx-[1rem] mt-[0.2rem] mb-0 text-xl font-semibold'
  return (
    <Menu>
      <Menu.Button className={authedUser}>
        <p className={authedUserName}>username</p>
        <div className={avatarWrapper}>
          <Image
            src={DummyAvatar}
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

        <Menu.Items as ='ul' className={menuItemsList}>
            <Menu.Item as = 'li'>
            {({ active }) => (
                <a
                className={`${active && 'bg-black text-white font-semibold'}`}
                href="/account-settings"
                >
                Profile
                </a>
            )}
            </Menu.Item>
            <Menu.Item as = 'li'>
            {({ active }) => (
                <a
                className={`${active && 'bg-black text-white font-semibold'}`}
                href="/account-settings"
                >
                Sign out
                </a>
            )}
            </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropDown
