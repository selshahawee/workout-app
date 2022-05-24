import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import Header from '../components/Header'

import SignInPage from "./login"

export default function Home() {
const {data :session } = useSession();
console.log(session)
  return (
    // <>
    //   <Head>
    //     <title>WorkOut</title>
    //   </Head>
    //   {/* <nav>
    //     {!session? (
    //       <button onClick={() => signIn("google")}>google connect</button>
    //     ) : (
    //       <>
    //         <span>{session.user.name}</span>
    //         {session.user.image && (
    //           <img
    //             src={session.user.image}
    //             style={{ width: "25px", borderRadius: "50%" }}
    //           />
    //         )}
    //         <button onClick={signOut}>Sign Out</button>
    //       </>
    //     )}
    //   </nav> */}
    //   <


    // </>


      <nav>
        {!session? (
          <SignInPage/>
        ) : (
          <>
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