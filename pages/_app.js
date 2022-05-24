import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';

import HomeLayout from '../components/HomeLayout'

import ProtectedRoute from "../components/ProtectedRoute"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    
    <SessionProvider session={session}>

      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>

     {/* <ProtectedRoute> */}
        <Component {...pageProps} />
        {/* </ProtectedRoute> */}

    </SessionProvider>
   
  )
}