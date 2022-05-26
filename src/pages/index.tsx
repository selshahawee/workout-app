import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import SignInPage from "./login"
import Header from '../components/Header'
import Layout from '../components/Layout'
import Browse from './browse';

export default function Home() {
const {data :session } = useSession();
console.log(session)
  return (
    <>
      <Head>
        <title>WorkOut</title>
      </Head>

      <nav>
        {!session? (
          <SignInPage/>
        ) : (
          // <Layout>
          //   <Browse/>
          // </Layout>
          <Header/>
        )}
      </nav>
    </>
  );
}