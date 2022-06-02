import { SessionProvider } from "next-auth/react"
import 'styles/globals.css';
import ProtectedRoute from "../components/ProtectedRoute"
import useSWR, { SWRConfig } from 'swr'
import Layout from '../components/Layout'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SWRConfig value={options}>
 <SessionProvider session={session}>
      {/* <ProtectedRoute> */}
          <Component {...pageProps} />
          {/* </ProtectedRoute> */}
      </SessionProvider>
     </SWRConfig>
   
  )
}