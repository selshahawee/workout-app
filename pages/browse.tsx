import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

function Browse () {

    const imageContainer = "relative w-80 h-[27rem] rounded-2xl mb-[0.75rem] rounded-2xl border"
    const caption = "transition duration-150 ease-out hover:ease-in my-4 text-gray-600"
    const card = "flex-col justify-center border transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-white duration-300"
    const browserWrapper = 'flex flex-col justify-center align-center'
    const cardTextContainer = ''
    const workoutName = 'font-bold'
    const workoutPic = 'w-full object-fill'

    const fetcher = (url) => axios.get(url).then((res) => res.data)
    const { data , error } = useSWR('/api/workout', fetcher)
    console.log(data)
    const test = [{name:'hello', key:'1'}, {name:'hi', key:'2'}, {name:'howdy', key:'3'}, {name:'hey', key:'4'}]
    
    
    useEffect(()=>{
        console.log({data})
    },[])
    
    return (
        <div className={browserWrapper}>
            <h1 className='font-extrabold self-center mt-[3rem] text-[3rem] text-center mb-[0.5rem] text-[1.5rem] p-[1rem]'>
                Browse our carefully curated workouts
            </h1>

            <ul className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-flow-rows gap-4 self-center' >
                {
                    data?.map((workout) => (
                        <li key={workout.id} className={card}>
                            <div className = {imageContainer}>
                                <Image
                                    src={workout.imgUrl}
                                    alt={workout.name}
                                    layout="fill"
                                    objectFit="cover"
                                    overflow = 'hidden'
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
