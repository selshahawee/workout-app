import { Fragment, ReactElement, ReactNode } from 'react'
import Footer from './Footer'

import Header from './Header'
import SideBar from './SideBar'


type ChildrenProps = {
  children: ReactNode
}

function HomeLayout({ children }: ChildrenProps) {

const grid = ''
const headerRow = ''
const asideColumn = ''
const mainBlock = ''
const footerRow = ''

// const grid = 'grid grid-rows-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'
// const headerRow = 'row-start-1 row-span-1 lg:col-span-2 md:col-span-1 sm:col-span-1 border'
// const asideColumn = 'absolute row-start-1 row-span-1 border lg:col-span-1 md:col-span-0 sm:col-span-0'
// const mainBlock = 'row-start-2 row-span-2 col-span-1'
// const footerRow = 'row-end-4 row-span-1 lg:col-span-2 md:col-span-1 sm:col-span-1 border'

// const smGrid = 'sm:grid sm:grid-rows-7 sm:grid-cols-1 border'
// const smHeaderRow = 'sm:row-start-1 sm:row-span-1 border'
// const smAsideColumn = 'md:row-span-0 border md:invisible'
// const smMainBlock = 'md:row-start-2 md:row-span-6 border'

// const grid = `sm:${smGrid} md:${smGrid} lg:${lgGrid}`
// const headerRow = `sm:${smHeaderRow} md:${smHeaderRow} lg:${lgHeaderRow}`
// const mainBlock = `sm:${smMainBlock} md:${smMainBlock} lg:${lgMainBlock}`
// const asideColumn = `sm:${smAsideColumn} md:${smAsideColumn} lg:${lgAsideColumn}`
  
  return (
    <div className={grid}>
      <header className={headerRow}>
        <Header />
      </header>
      <aside className='w-[14rem] lg:block md:hidden sm:hidden'>
        <SideBar />
      </aside>
      <main className={mainBlock}>{children}</main>
      <footer className={footerRow}>
        <Footer/>
      </footer>
    </div>
  )
}

export default HomeLayout
