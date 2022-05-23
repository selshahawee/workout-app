import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
