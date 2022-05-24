import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import ProtectedRoute from "../components/ProtectedRoute"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    
    <SessionProvider session={session}>
     {/* <ProtectedRoute> */}
        <Component {...pageProps} />
        {/* </ProtectedRoute> */}
    </SessionProvider>
   
  )
}