import React from 'react'
import Navigator from './Navigator'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'
function SideBar() {

    const sideBarWrapper = 'flex flex-col justify-center align-center w-[12rem] invisible lg:visible'
    const logoWrapper = 'relative w-[12rem] h-[3.5rem] self-start mb-[2rem]'

    

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