import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// type Card = {
//   name:string,
//   caption:string,
//   description:string,
//   image:string,
// }
function WorkOutCard({
  name,
  caption,
  description,
  image,
  video
}) {
  console.log({ name,
    caption,
    description,
    image,
    video})
  return (
    <div className='flex-col justify-center '>
            <div className='w-full h-96 relative'>
                <Image
                    src={image}
                    alt='name'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex-col justify-left align-center p-4'>
                <h1 className='my-2 text-2xl font-bold overflow-hidden'>{name}</h1>
                <p>{caption}</p>
                <Link href={`/workout/${name}`}>
                    <a className='transition duration-150 ease-out hover:ease-in my-4'>
                        go
                    </a>
                </Link>
            </div>
        </div>
  )
}

export default WorkOutCard