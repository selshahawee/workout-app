import { Fragment, ReactElement, ReactNode } from 'react'
import Footer from './Footer'
import { useRouter } from 'next/router'
import Header from './Header'
import SideBar from './SideBar'
import { useSession } from 'next-auth/react'

import SignInPage from 'pages/login'

type ChildrenProps = {
  children: ReactNode
}

function HomeLayout({ children }: ChildrenProps) {
  const grid =

    'flex flex-row justify-center items-center w-full min-height-screen lg:justify-between bg-gray-200'
  const headerRow = 'w-full mb-[2.5rem] bg-white h-[5rem] px-[2rem] lg:flex lg:flex-row lg:justify-center lg:items-start'
  const mainBlock = 'w-full self-center bg-gray-200 lg:min-w-[81rem] lg:max-w-full'


  const footerRow = ''

  const router = useRouter();
  const { data: session, status } = useSession()


  // if (status === 'loading') {
  //   return <p>loading......</p>
  // }
  // if (status === 'unauthenticated') {
  //  return <SignInPage/>
  // }

  return (
    <div className={grid}>
      <aside className="fixed top-0 left-0 pt-[1rem] flex flex-col bg-white h-[100vh] hidden w-[0rem] items-start justify-start lg:block lg:w-[12rem]">
        <SideBar />
      </aside>
      <div className="flex flex-col items-center justify-end bg-gray-200 w-full lg:ml-[12rem]">

        <header className={headerRow}>
          <Header />
        </header>
        <main className={mainBlock}>{children}</main>
        <footer className={footerRow}>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default HomeLayout
