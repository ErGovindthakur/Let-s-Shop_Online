import React, { useState } from 'react'

const Profile = ({name, address, email}) => {
     const [count, setCount] = useState(0)

     const handleIncrement = () => {
          // setCount(count + 1)
          // setCount(count + 1)
          // setCount(count + 1)

          setCount(prevCount => prevCount + 1)
          setCount(prevCount => prevCount + 1)
          setCount(prevCount => prevCount + 1)
     }
  return (
    <div className="border border-black w-[450px]">
    <h1 className='font-semibold text-2xl'>Profile functional component</h1>
     <h1>Name -: {name}</h1>
     <h1>Address -: {address}</h1>
     <h1>Email -: {email}</h1>
     <h1>Count -: {count}</h1>
     <button onClick={handleIncrement} className='border border-black px-3 py-2 m-3'>Increment</button>
    </div>
  )
}

export default Profile