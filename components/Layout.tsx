import { Fragment, ReactElement, ReactNode } from 'react'
import Footer from './Footer'

import Header from './Header'
import SideBar from './SideBar'


type ChildrenProps = {
  children: ReactNode
}

function HomeLayout({ children }: ChildrenProps) {

const grid = 'grid lg:grid-cols-3 md:grid-cols-1 '
const headerRow = ''
const asideColumn = ''
const mainBlock = ''
const footerRow = ''
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
      <aside className={asideColumn}>
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
