import React, { useState } from 'react'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import DummyAvatar from '../images/dummy-avatar..png'
import UserDropDown from './UserDropDown'
function NavBar() {

  const [open, setOpen] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const viewDropDown = () => {
    
  }
  const headerContainer = 'bg-white flex flex-row p-[0.5rem] justify-between align-center'

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
