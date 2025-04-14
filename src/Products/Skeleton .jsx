import React from 'react'

const Skeleton = () => {
  return (
    <>
    <button className='w-[180px] py-4 px-3 bg-gray-300 my-3 mx-3 rounded-md'></button>
    <div className='w-[98%] flex flex-wrap gap-3'>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    <div className='w-[300px] h-[360px] bg-gray-300 rounded-md'></div>
    </div>
    </>
  )
}

export default Skeleton