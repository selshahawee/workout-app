import React, { useState } from 'react'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import DummyAvatar from '../images/dummy-avatar..png'
import UserDropDown from './UserDropDown'
function NavBar() {

//   to be sent as props from the parent component const [open, setOpen] = useState(false)

  
  const headerContainer = 'bg-white flex flex-row py-[1.2rem] justify-between align-center '

  return (
    <div className={headerContainer}>
        <div>
            bla bla bla
        </div>
        <UserDropDown/>     
    </div>  
  )
}

export default NavBar
