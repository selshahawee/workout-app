import React from 'react'
import {Field, FormikProvider, useFormik} from 'formik'
import Link from 'next/link';
import Logo from '../images/logo.png'
import Image from 'next/image';

function SignUpPage() {
    const gender = ["male", "female"]
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            email: "",
            password: "",
            gender:"",
            weight:"",
            height:""
          },
          
          onSubmit: async (values) => {
            formik.resetForm();
        //   const data = await signUpAPI(values);
        //   navigate:("/");
         //bg-[url('/img/hero-pattern.svg')]"
        },
      });
  return (
    <FormikProvider value={formik}>

        <div className="flex min-h-screen bg-white">
            <div className="w-1/2 bg-cover md:block hidden bg-[url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)]"></div>
            <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
                <div className='flex-col justify-center'>
                    <Image src={Logo} alt='brand'/>
                    <div className='text-left p-0 font-sans'>
                        <h1>Create a new accout</h1>
                        <h3>or sign in with an existing account.</h3>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">
                    First Name
                    <input
                        id="firstName"
                        onInput={formik.handleChange}
                        value={formik.values.firstName}
                        placeholder="i.e John"
                    />
                </label>
                <label htmlFor="lastName">
                    Last Name
                    <input
                        id="lastName"
                        onInput={formik.handleChange}
                        value={formik.values.lastName}
                        placeholder="i.e Smith"
                    />
                </label>
                <label htmlFor="email">
                    email
                    <input
                        id="email"
                        onInput={formik.handleChange}
                        value={formik.values.email}
                        placeholder="example@mail.com"
                    />
                </label>
                <label htmlFor="gender">
                    Gender
                    <Field
                        component="select"
                        id="gender"
                        name="gender"
                        multiple={true}
                    >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </Field>
                </label>
                <label htmlFor="weight">
                    Weight
                    <input
                        id="weight"
                        onInput={formik.handleChange}
                        value={formik.values.weight}
                        placeholder="###lbs"
                    />
                </label>
                <label htmlFor="height">
                    Height
                    <input
                        id="height"
                        onInput={formik.handleChange}
                        value={formik.values.height}
                        placeholder="###m"
                    />
                </label>
                <div className='form-buttons'>
                    <button type='submit' className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600">Sign up with email</button>

                </div>
            </form>
            </div>
        </div>
    </FormikProvider>
  )
}

export default SignUpPage

function useNavigate() {
    throw new Error('Function not implemented.');
}

