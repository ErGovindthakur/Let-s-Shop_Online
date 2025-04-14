import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  // console.log(err)
  return (
    <>
    <h1 className='text-red-600 text-2xl'>Opps !! <span className='text-black'>Mr Govinda</span></h1>
    <h2>Something went wrong</h2>
    <p>Status code -: {err.status} {err.statusText}</p>
    <p>{err.error.message}</p>
    <p>{err.error.stack}</p>
    </>

  )
}

export default Error