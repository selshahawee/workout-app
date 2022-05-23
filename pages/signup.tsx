import React from 'react'
import { Field, FormikProvider, useFormik } from 'formik'
import Link from 'next/link'
import Logo from '../images/logo.png'
import Image from 'next/image'

function SignUpPage() {

  const h1Styling = "mt-[1rem] mb-[0.2rem] text-3xl font-bold"
  
  const labelStyle = "mb-[0.5rem] flex flex-col font-bold"

  const inputStyle = 'p-[0.25rem] mt-[0.25rem]'

  const buttonStyle = "hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem]"

  const selectStyle = "form-select appearance-none block w-full px-3 py-1.5 my-[0.25rem] text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      weight: '',
      height: '',
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
        <div className="hidden w-1/2 bg-[url(https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400)] bg-cover md:block"></div>
        <div className="mx-auto my-15 max-w-lg px-4 py-5 shadow-none md:w-1/2">
          <div className="mb-[2.5rem] flex flex-col justify-center">
              <div className='relative w-80 h-[9rem]'>
                <Image src={Logo} alt="brand" layout='fill' objectFit='contain'/>
              </div>
            <div className="p-0 text-left font-sans">
              <h1 className={h1Styling}>
                Create a new accout
              </h1>
              <h3 className='text-gray-500'>or sign in with an existing account.</h3>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName" className={labelStyle}>
              First Name
              <input
                id="firstName"
                onInput={formik.handleChange}
                value={formik.values.firstName}
                placeholder="i.e John"
                className={inputStyle}
              />
            </label>
            <label htmlFor="lastName" className={labelStyle}>
              Last Name
              <input
                id="lastName"
                onInput={formik.handleChange}
                value={formik.values.lastName}
                placeholder="i.e Smith"
                className={inputStyle}
              />
            </label>
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
            <label htmlFor="gender" className={labelStyle}>
              Gender
              <Field as="select" name="gender" value={formik.values.gender} className={selectStyle} onSelect={formik.handleChange}>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Field>
            </label>
            <label htmlFor="weight" className={labelStyle}>
              Weight
              <input
                id="weight"
                onInput={formik.handleChange}
                value={formik.values.weight}
                placeholder="###lbs"
                className={inputStyle}
              />
            </label>
            <label htmlFor="height" className={labelStyle}>
              Height
              <input
                id="height"
                onInput={formik.handleChange}
                value={formik.values.height}
                placeholder="###m"
                className={inputStyle}
              />
            </label>
            <button
            type="submit"
            className={buttonStyle}>
            Sign up with email
            </button>
          </form>
        </div>
      </div>
    </FormikProvider>
  )
}

export default SignUpPage
