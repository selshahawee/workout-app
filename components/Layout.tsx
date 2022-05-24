import { Fragment, ReactElement, ReactNode } from 'react'

import Header from './Header'
import SideBar from './SideBar'

type ChildrenProps = {
  children: ReactNode
}

function Layout({children}:ChildrenProps) {

    const grid = "grid grid-rows-3 grid-flow-col gap-4"
  return (
    <Fragment>
        <Header/>
        <main >
            <SideBar/>
            {children}
        </main>
        <footer></footer>
    </Fragment>

  )
}

export default Layout