import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import ProtectedRoute from "../components/ProtectedRoute"
import useSWR, { SWRConfig } from 'swr'
import Layout from '../components/Layout'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
 
  return (
    // <SWRConfig
    //   value={{
    //     refreshInterval: 3000,
    //     fetcher = (url) => axios.get(url).then((res) => res.data)
    //   }}
    // >
      <SessionProvider session={session}>
      {/* <ProtectedRoute> */}
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
          {/* </ProtectedRoute> */}
      </SessionProvider>
    // </SWRConfig>
   
  )
}