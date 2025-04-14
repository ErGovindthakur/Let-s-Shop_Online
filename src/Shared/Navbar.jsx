import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../Utils/UserContext'
import { useSelector } from 'react-redux'

const Navbar = () => {
  // Calling our global store here using useContext Api (context Api)
  const myUser = useContext(UserContext)

  // calling here global store using redux toolkit (react-redux)
  const cartItems = useSelector((store) => store.cart.cartItems)


  return (
    <div className='w-full flex justify-between shadow-md px-3 py-4 items-center'>
    <div>
    <h2>Logo</h2>
    </div>
    <div className='flex gap-5'>
     <NavLink to='/'>Men</NavLink>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/products'>Products</NavLink>
     <NavLink to='/grocery'>Grocery-{cartItems.length}</NavLink>
     <NavLink to='/contextApi'>ContextApi</NavLink>
     <NavLink to='/memo'>MemRef</NavLink>
     <li className='list-none text-violet-700 font-bold'>{myUser.name}</li>
    </div>
    <div className='flex gap-5'>
     <button className='bg-gray-300 py-3 px-9 rounded-md'>Login</button>
     <button className='bg-green-500 py-3 px-9 rounded-md text-white'>Signup</button>
    </div>
    </div>
  )
}

export default Navbar