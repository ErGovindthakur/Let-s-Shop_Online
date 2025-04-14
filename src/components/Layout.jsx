import { useState } from 'react'
import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
// import CompoA from './CompoA'
// import ContextApi from './ContextApi'
import UserContext from '../Utils/UserContext'
import { Provider } from 'react-redux'
import appStore from '../store/Store'

const Layout = () => {
  const [name, setName] = useState('Alley Thakur')
  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{name,setName,profession:'Software-Developer',email:'alley@gmail.com'}}>
     <Navbar />
     <Outlet />
    </UserContext.Provider>
    </Provider>
    </>
  )
}

export default Layout