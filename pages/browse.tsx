import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { CircularProgress } from '@mui/material';
function Browse () {

    const imageContainer = "relative w-80 h-[27rem] rounded-2xl mb-[0.75rem] rounded-2xl"
    const caption = "transition duration-150 ease-out hover:ease-in my-4 text-gray-600"
    const card = 'flex-col justify-center border transition ease-in-out delay-150 p-[1rem] rounded-2xl my-[1rem] hover:-translate-y-1 hover:bg-white duration-300'
    const browserWrapper = 'flex flex-col justify-center align-center'
    const cardTextContainer = ''
    const workoutName = 'font-bold'
    const workoutPic = 'w-full object-fill'
    const browserTitle = 'font-extrabold self-center text-[3rem] text-center mb-[0.25rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[3rem] p-[1rem]'
    const browserSubTitle = 'font-semibold text-gray-600 mb-[1.5rem] self-center text-[1.2rem]'
    const list = 'grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-flow-rows gap-4 self-center'


    const allWorkOuts = (url) => axios.get(url).then((res) => res.data)
    const { data , error } = useSWR('/api/workout', allWorkOuts)
    console.log(data)
    const test = [{name:'hello', key:'1'}, {name:'hi', key:'2'}, {name:'howdy', key:'3'}, {name:'hey', key:'4'}]
    
    
    useEffect(()=>{
        console.log({data})
    },[])

    if(!data) {

        return (
            <div className='flex justify-center items-center w-full h-[100vh]'>
                <CircularProgress color="inherit" className='w-[12rem]'/>
          </div> 
        )  
      }

    // if(!data){
    //     return <h1>loading</h1>
    // }
    
    return (
        <div className={browserWrapper}>
            <h1 className={browserTitle}>
                Browse our carefully curated workouts
            </h1>
            <p className={browserSubTitle}>designed to push you right to the peak</p>
            <ul className={list}>
                {
                    data?.map((workout) => (
                        <li key={workout.id} className={card}>
                            <div className = {imageContainer}>
                                <Image
                                    src={workout.imgUrl}
                                    alt={workout.name}
                                    layout="fill"
                                    objectFit="cover"

                                    

                                    className={workoutPic}
                                />
                            </div>
                            <div className = {cardTextContainer}>
                                <h3 className={workoutName}>
                                    {workout.name}
                                </h3>
                                <Link href={`/workout/${workout.id}`}>
                                    <a className = {caption}>
                                        get it started
                                    </a>
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Browse
