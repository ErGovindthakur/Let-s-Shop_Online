import {Suspense,lazy} from 'react'
// import Navbar from './Shared/Navbar'
import ProductCart from './Products/ProductCart'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Men from './components/Men'
// import About from './components/About'

import ProductsDetail from './components/ProductsDetail'
import Error from './components/Error'
import Memo from './components/Memo'
import Ref from './components/Ref'

// Here we will put our grocery in lazy instead of normal importing
// import Grocery from './components/Grocery'

// Applying here the concept of 
/*
lazy loading
code splitting
dynamic import
Above all the naming convention are same
*/

const Grocery = lazy(() => import('./components/AddedCart'))
// Creating our second lazy loading
const About = lazy(()=> import('./components/About'))
// Creating our third lazy loading for context api data
const ContextApi = lazy(() => import('./components/ContextApi'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />} >
    <Route path='/' element={<Men />} />
    <Route path='products' element={<ProductCart />} />
    
    <Route path='about' element={<Suspense fallback={<h1>
    About section is loading..</h1>}><About />
    </Suspense>} />

    <Route path='contextApi' element={<Suspense><ContextApi /></Suspense>} />
    {/* Dynamic routing in react  */}
    <Route path='product/:ProductId' element={<ProductsDetail />} />
    <Route path='memo' element={<Memo />} />
    <Route path='ref' element={<Ref />} />
    <Route path='/grocery' element={<Suspense fallback={<h1>Grocery is Loading...</h1>}>
      <Grocery />
    </Suspense> } />
    </Route>
  )
)
const App = () => {
  return (
    <div>
    <RouterProvider router={router} />
      {/* <Navbar />
      <ProductCart /> */}
    </div>
  )
}

export default App

// Note -: Higher Order Component is a function (HOC) which receive a component as a parameter and modify something in received component and return them.