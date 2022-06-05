import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import SignInPage from './login'
import Header from '../components/Header'
import Layout from '../components/Layout'

import Browse from './browse';
import Dashboard from "./dashboard";




export default function Home() {

  return (
    <>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <title>WorkOut</title>
      </Head>


      {/* <nav>
        {!session? (
          <SignInPage/>
        ) : (
          <Layout>
            <Dashboard/>
            <Browse/>
          </Layout>
        )}
      </nav> */}

      <Layout>
        <Browse/>
      </Layout>


    </>
  )
}
