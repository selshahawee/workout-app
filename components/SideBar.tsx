import React from 'react'
import Navigator from './Navigator'
import Logo from '../images/logo.png'
import Image from 'next/image'
function SideBar() {

    const sideBarWrapper = 'flex flex-col justify-center align-center'
    const logoWrapper = 'relative w-80 h-[3rem]'
    

  return (
    <aside className={sideBarWrapper}>
        <div className={logoWrapper}>
            <Image src={Logo} alt="brand" layout="fill" objectFit="contain" />
        </div>
        <Navigator/>
    </aside>
  )
}

export default SideBar