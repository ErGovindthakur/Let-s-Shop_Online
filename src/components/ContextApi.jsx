import { useContext } from 'react'
import CompoA from './CompoA'
import UserContext from '../Utils/UserContext'

const ContextApi = () => {
  const user = useContext(UserContext)
  
  return (
    <div className=''>
    <div className='w-full flex justify-center mt-5'>
    <input className='outline-none border border-black px-2 py-1'
    type='text'
    placeholder='Set Name*'
    value={user.name}
    onChange={(e) => user.setName(e.target.value)}
    />
    </div>
     <CompoA />
    </div>
  )
}

export default ContextApi