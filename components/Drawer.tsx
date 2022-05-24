import React from 'react'
import Logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
function Drawer() {
  const drawerList = 'flex flex-col justify-start w-full '
  const logo = 'relative w-80 h-[3rem]'
  const drawerContainer = 'flex flex-col justify-center align-center'
  const drawerListItem = ''
  const listItems = [
      {
          name:'Dashboard',
          href:'/dashBoard',
          key:'1'
      },
      {
          name:'Browse workouts',
          href:'/browser',
          key:'2'
      },
      {
          name:'Calendar',
          href:'/calendar',
          key:'3'
      },
      {
          name:'Progress',
          href:'/progress',
          key:'4'
      }
  ]
  
  return (
    <div className={drawerContainer}>
      <div className={logo}>
        <Image src={Logo} alt="brand" layout="fill" objectFit="contain" />
      </div>

      <ul className={drawerList}>
          {
              listItems.map((item) => (

                  <li className={drawerListItem} key={item.key}>
                      <Link
                        href={item.href}
                      >
                        <a>{item.name}</a>
                      </Link>
                  </li>
              ))
          }
      </ul>
    </div>
  )
}

export default Drawer
