import { Fragment, ReactElement, ReactNode } from 'react'
import Footer from './Footer'

import Header from './Header'
import SideBar from './SideBar'


type ChildrenProps = {
  children: ReactNode
}

function HomeLayout({ children }: ChildrenProps) {

const grid = 'flex flex-row justify-center items-center w-full min-height-screen lg:justify-between'
const headerRow = 'w-full mb-[2.5rem] bg-white h-[5rem]'
const pageWrapper = ''
const asideColumn = ''
const mainBlock = 'w-full lg:w-[80rem] self-end bg-gray-200'
const footerRow = ''

  
  return (
    <div className={grid}>
      <aside className='w-[0rem] hidden lg:w-[14rem] lg:block items-start justify-start top-0 left-0 mt-[1rem] absolute'>
        <SideBar />
      </aside>
      <div className='flex flex-col items-center justify-end lg:ml-[12rem] bg-gray-200'>
        <header className={headerRow}>
          <Header />
        </header>
          <main className={mainBlock}>
            {children}
          </main>
        <footer className={footerRow}>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default HomeLayout
