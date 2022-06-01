import React from 'react'
import { Field, FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/react'

function SignInPage(GoogleLogin: any) {
  const { data: session } = useSession()
  const responseGoogle = (response) => {
    console.log(response)
  }

  const h1Styling = 'mt-[1rem] mb-[0.2rem] text-3xl font-bold'

  const labelStyle = 'mb-[0.5rem] flex flex-col font-bold'

  const buttonStyle =
    'hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[1rem] duration-300 ...'

  const inputStyle = 'p-[0.25rem] mt-[0.25rem]'

  const selectStyle =
    'form-select appearance-none block w-full px-3 py-1.5 my-[0.25rem] text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none'

  
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden w-1/2 bg-[url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)] bg-cover md:block"></div>
      <div className="my-15 mx-auto max-w-lg px-4 py-5 shadow-none md:w-1/2">
        <div className="mb-[2.5rem] flex flex-col justify-center">
          <div className="relative h-[9rem] w-80">
            <Image src={Logo} alt="brand" layout="fill" objectFit="contain" />
          </div>
          <div className="p-0 text-left font-sans">
            <h1 className={h1Styling}>Sign in to your account</h1>
            <h3 className="text-gray-500">start your workout</h3>
          </div>
        </div>

        <button
          onClick={() => signIn('google',{
            callbackUrl: "http://localhost:3000/",
          })}
          type="button"
          className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
        >
          <svg
            className="mr-2 -ml-1 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>

        <Link href="/signup/newuser">
        <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab"  viewBox="0 0 384 512"></svg>
  Don't Have An Account Sign Up
          </button>
          </Link>
      </div>
    </div>
  )
}

export default SignInPage
