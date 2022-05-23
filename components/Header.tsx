import React, { useState } from 'react'
import Image from 'next/image'
function NavBar() {

  const [open, setOpen] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const viewDropDown = () => {
    
  }
  const headerContainer = 'bg-white flex flex-row p-[0.5rem] justify between align center'
  const avatarWrapper = "h-64 w-96 relative"
  const avatar = "rounded-full w-32"
  const authedUser = 'flex flex-row justify center align center'
  return (
    <div className={headerContainer}>
      <div className={authedUser}>
        <div className={avatarWrapper}>
          <Image 
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
            className ={avatar}
            alt="Avatar"
            onClick={()=>setDropDown}
          />
        </div>
        <p>username</p>
      </div>
    </div>  
  )
}

export default NavBar
