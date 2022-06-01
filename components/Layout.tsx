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
    'flex flex-row justify-center items-center w-full min-height-screen lg:justify-between'
  const headerRow = 'w-full mb-[2.5rem] bg-white h-[5rem]'
  const pageWrapper = ''
  const asideColumn = ''
  const mainBlock = 'w-full self-center lg:w-[88.8%] lg:self-start bg-gray-200'
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
      <aside className="absolute top-0 left-0 mt-[1rem] hidden w-[0rem] items-start justify-start lg:block lg:w-[14rem]">
        <SideBar />
      </aside>
      <div className="flex flex-col items-center justify-end bg-gray-200 lg:ml-[12rem]">
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
