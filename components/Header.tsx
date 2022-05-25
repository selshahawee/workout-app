import React, { useState } from 'react'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import DummyAvatar from '../images/dummy-avatar..png'
import UserDropDown from './UserDropDown'
import { MenuIcon } from '@heroicons/react/outline'

function NavBar() {
  
  //   to be sent as props from the parent component const [open, setOpen] = useState(false)
  
  
  
  const headerContainer = 'bg-white flex flex-row py-[1.2rem] justify-between align-center '

  return (
    <header className={headerContainer}>
        <button 
            type="button"
            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
            onClick={() => setOpen(true)}
        >
            <MenuIcon className='h-6 w-6'/>
        </button>
        <UserDropDown/>     
    </header>  
  )
}

export default NavBar