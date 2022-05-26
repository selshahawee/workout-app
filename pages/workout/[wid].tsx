import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Browse() {
   
  const imageContainer =
    'relative w-80 h-[27rem] rounded-2xl mb-[0.75rem] rounded-2xl border'
  const caption =
    'transition duration-150 ease-out hover:ease-in my-4 text-gray-600'
  const card =
    'flex-col justify-center border transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-white duration-300'
  const browserWrapper = 'flex flex-col justify-center align-center'
  const cardTextContainer = ''
  const workoutName = 'font-bold'
  const workoutPic = 'w-full object-fill'

  const router = useRouter()
  const { wid } = router.query

  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('/api/workout/' + wid, fetcher)
  console.log(data)
  const test = [
    { name: 'hello', key: '1' },
    { name: 'hi', key: '2' },
    { name: 'howdy', key: '3' },
    { name: 'hey', key: '4' },
  ]

 if (!data) {
   return (
       <h1>Loading..</h1>
   )
 }
  return (
    <div className={browserWrapper}>
      <h1 className="mt-[3rem] mb-[0.5rem] self-center p-[1rem] text-center text-[3rem] text-[1.5rem] font-extrabold">
        {data.name}
      </h1>
      {data.exercises.length == 0 ? (
        <h1>no exercise</h1>
      ) : (
        <ul className="grid-flow-rows grid  gap-4 self-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.exercises?.map((exercise) => (
            <li key={exercise.id} className={card}>
              <div className={imageContainer}>
                <Image
                  src={exercise.exercise.videoUrl}
                  alt={exercise.exercise.name}
                  layout="fill"
                  objectFit="cover"
                  // overflow="hidden"
                  className={workoutPic}
                />
              </div>
              <h2>{exercise.exercise.name}</h2>
              <p>{exercise.exercise.description}</p>
              <p>{exercise.exercise.sugSets}</p>

              <div>
                {Array.from(Array(exercise.exercise.sugSets))
                  .keys()
                  .map((input: number) => (
                    <p key={input}>{input}</p>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
