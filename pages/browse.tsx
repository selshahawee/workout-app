import React from 'react'
import useSWR from 'swr'

function browse() {

    const { data: product, error } = useSWR<SingleProduct>(
        `/api/workout`
      )
    return (
        <div className='flex flex-col justify-center align-center'>
            <h1 className=''>
                Browse our carefully curated workouts
            </h1>
            <ul className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-flow-rows'>
                {
                    
                }
            </ul>
        </div>
    )
}

export default browse
