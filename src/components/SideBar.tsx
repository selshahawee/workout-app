import React from 'react'
import Navigator from './Navigator'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'
function SideBar() {

    const sideBarWrapper = 'flex flex-col justify-center align-center w-[15rem]'
    const logoWrapper = 'relative w-[12rem] h-[3rem] self-start'
    

  return (
    <div className={sideBarWrapper}>
        <div className={logoWrapper}>
            <Image src={Logo} alt="brand" layout="fill" objectFit="contain" />
        </div>
        <Navigator/>
    </div>
  )
}

export default SideBar