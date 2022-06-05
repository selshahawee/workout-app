import React from 'react'
import Link from 'next/link'
function Navigator() {

  const navList = 'flex flex-col justify-start w-full z-30'

  const navListItem = "py-[0.5rem] px-[1.5rem] z-40 transition ease-in-out delay-15 hover:bg-gray-800 hover:pl-[1rem] hover:text-white"

  const pageName = "text-[1rem] font-bold"
  

    const pages = [
      {
        key: '1',
        name: 'Dashboard',
        href: '/dashboard',
      },
      {
        key: '2',
        name: 'Workouts browser',
        href: '/browse',
      },
      {
        key: '3',
        name: 'Calendar',
        href: '/calendar',
      },
      {
        key: '4',
        name: 'Progress',
        href: '/progress',
      },
    ]
    
  return (
    <div className={navList}>
      <ul className="">
        {pages.map((page) => (
          <li key={page.name} className={navListItem}>
            <Link href={`${page.href}`}>
              <a className={pageName}>{page.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigator