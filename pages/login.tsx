import React from 'react'
import { Field, FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import Logo from '../images/logo.png'
import Image from 'next/image'

function SignInPage() {
  
  const h1Styling = "mt-[1rem] mb-[0.2rem] text-3xl font-bold"

  const labelStyle = "mb-[0.5rem] flex flex-col font-bold"

  const buttonStyle = "hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem]"

  const inputStyle = 'p-[0.25rem] mt-[0.25rem]'

  const selectStyle = "form-select appearance-none block w-full px-3 py-1.5 my-[0.25rem] text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      formik.resetForm()
      //   const data = await signUpAPI(values);
      //   navigate:("/");
      //bg-[url('/img/hero-pattern.svg')]"
    },
  })
  return (
    <FormikProvider value={formik}>
      <div className="flex min-h-screen bg-white">
        <div className="hidden w-1/2 bg-[url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387)] bg-cover md:block"></div>
        <div className="mx-auto my-15 max-w-lg px-4 py-5 shadow-none md:w-1/2">
          <div className="mb-[2.5rem] flex flex-col justify-center">
              <div className='relative w-80 h-[9rem]'>
                <Image src={Logo} alt="brand" layout='fill' objectFit='contain'/>
              </div>
            <div className="p-0 text-left font-sans">
              <h1 className={h1Styling}>
                Sign in to your account
              </h1>
              <h3 className='text-gray-500'>start your workout</h3>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email" className={labelStyle}>
              Email
              <input
                id="email"
                onInput={formik.handleChange}
                value={formik.values.email}
                placeholder="example@mail.com"
                className={inputStyle}
              />
            </label>
            <label htmlFor="password" className={labelStyle}>
              Password
              <input
                id="password"
                onInput={formik.handleChange}
                value={formik.values.password}
                placeholder="**********"
                className={inputStyle}
              />
            </label>
            <button
            type="submit"
            className={buttonStyle}
            >
            Login
            </button>
          </form>
        </div>
      </div>
    </FormikProvider>
  )
}

export default SignInPage
