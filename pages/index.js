import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import SignInPage from "./login"
import Header from '../components/Header'
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
          <>
          <Header/>
            <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )}
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </nav>
    </>
  );
}