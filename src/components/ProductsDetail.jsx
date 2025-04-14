import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hook/useGetSingleProduct'
// For dispatching our action 
import { addItems } from '../store/CartSlice'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ProductsDetail = () => {

  const {ProductId} = useParams()
  // calling here useDispatch() hook
  const dispatch = useDispatch()

  const singleProduct = useGetSingleProduct(ProductId)

  const handleCartItems = () => {
    dispatch(addItems(singleProduct))
  }
  
  // Applying condition to check singleProduct is null or not
  
  if(singleProduct === null){
    return(
      <h1>Product is Loading...</h1>
    )
  }
  console.log(singleProduct)

  const {image,category, description, title, price, rating,} = singleProduct;

  const showAlert = () => {
    Swal.fire({
      title: 'Successfully Ordered',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Order Now'
    })
  }
  return (
    <div className='w-[81%] py-5 px-4 bg-gray-50 rounded-md shadow-md mx-auto mt-9 flex gap-5'>
    <div className='w-1/2 rounded-md'>
      <img src={image}  className='w-full h-[63vh]'/>
    </div>
    <div className='w-[45%] pl-2 py-2  flex flex-col gap-3'>
    <h1 className='font-semibold text-2xl'>Category -: {category}</h1>
    <h1 className='font-semibold text-2xl'>Title -: {title}</h1>
    <p className='font-semibold text-lg text-gray-500'>Description -: {description}</p>
    <p className='font-semibold text-lg'>Price -: {price}</p>
    <p className='font-semibold text-lg'>Rating -: {rating.rate}</p>

    <button onClick={handleCartItems} className='px-3 py-2 rounded-md bg-red-700 text-white'>Add to Cart</button>
    <button className='px-3 py-2 rounded-md bg-green-700 text-white' 
    onClick={showAlert}>Order Now</button>
    </div>
    </div>
  )
}

export default ProductsDetail