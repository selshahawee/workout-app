import React from 'react'
import { Field, FormikProvider, useFormik } from 'formik'

import Logo from 'assets/images/logo.png'
import Image from 'next/image'
import SignUpPage from './index'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function NewUser() {
  const router = useRouter()

  const h1Styling = 'mt-[1rem] mb-[0.2rem] text-3xl font-bold'

  const labelStyle = 'mb-[0.5rem] flex flex-col font-bold'

  const inputStyle = 'p-[0.25rem] mt-[0.25rem]'

  const buttonStyle =
    'hover:bg-black-600 w-full rounded bg-black py-3 text-white mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[1rem] duration-300 ...'

  const selectStyle =
    'form-select appearance-none block w-full px-3 py-1.5 my-[0.25rem] text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none'

  const formik = useFormik({
    initialValues: {
      gender: '',
      weight: 0,
      height: 0,
      age: 0,
    },

    onSubmit: async (values) => {
      formik.resetForm()
      const updateUser = await axios.put(`/api/user`, values)
      console.log(updateUser)
      router.push('/')
    },
  })



  return (
    <>
      <nav>
        <FormikProvider value={formik}>
          <div className="flex min-h-screen bg-white">
            <div className="hidden w-1/2 bg-[url(https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400)] bg-cover md:block"></div>
            <div className="my-15 mx-auto max-w-lg px-4 py-5 shadow-none md:w-1/2">
              <div className="mb-[2.5rem] flex flex-col justify-center">
                <div className="relative h-[9rem] w-80">
                  <Image
                    src={Logo}
                    alt="brand"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-0 text-left font-sans">
                  <h1 className={h1Styling}>Fill In Your Information</h1>
                </div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="age" className={labelStyle}>
                  Age
                  <input
                    id="age"
                    onInput={formik.handleChange}
                    value={formik.values.age}
                    className={inputStyle}
                  />
                </label>

                <label htmlFor="gender" className={labelStyle}>
                  Gender
                  <Field
                    as="select"
                    name="gender"
                    value={formik.values.gender}
                    className={selectStyle}
                    onSelect={formik.handleChange}
                  >
                    <option value=""></option>
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
                  className={buttonStyle}
                  onClick={() => formik.handleSubmit}
                >
                  Submit Information
                </button>
              </form>
            </div>
          </div>
        </FormikProvider>
      </nav>
    </>
  )
}

export default NewUser
