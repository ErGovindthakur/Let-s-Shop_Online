import { useEffect, useState } from 'react'
import Skeleton from './Skeleton ';
import { Link } from 'react-router-dom';
import ProductData, { HOF } from './ProductData';

const ProductCart = () => {
     // Initializing first hook to render the page
     const [products, setProducts] = useState([]);
     // Applying filter feature
     const [filterProducts, setFilterProducts] = useState([])
     // Initialize state to implement search functionality
     const [searchText , setSearchText] = useState('')
     // Initializing here temp filter method to search whole data
     const [tempFilter, setTempFilter] = useState([])

     // Using useEffect hook to fetch the data
     useEffect(()=>{
          handleFetchedData()
     },[])

     const handleFetchedData = async() => {
          const data = await fetch('https://fakestoreapi.com/products')
          const response = await data.json()
          setProducts(response)
          setFilterProducts(response)
          setTempFilter(response)
     }


     const HofCompo = HOF(ProductData) // this Hof is a higher order component

     // Applying filtered method
     const handleFilteredProducts = () => {
          let filterProducts = products.filter((data) => {
               return(
                    data.rating.rate >= 4
               )
          })
          setTempFilter(filterProducts)
     }

     
     // Applying the concept of conditional rendering
  return products.length === 0 ? <Skeleton /> : (
     <>   
     <div className='w-full flex justify-between items-center'>

    <div>
    <button
    onClick={handleFilteredProducts}
     className='bg-green-500 text-white font-semibold py-2 px-3 mx-3 mt-5 rounded-md'>
     Show Top Rated Products
     </button>
    </div>

    <div className='w-[320px] mr-3 mt-5 flex'>
     <input 
     onChange={(e) => setSearchText(e.target.value)}
     value={searchText}
     type='text' 
     placeholder='Search items here..'
     className='outline-none border border-black w-full py-2 px-3 rounded-l-full'
       />
       <button 
       onClick={()=>{
          const searchedData = filterProducts.filter((data) => {
               return(
                    data.title.toLowerCase().includes(searchText.toLowerCase())
               )
          })
          setTempFilter(searchedData)
       }}
       className='bg-green-500 py-2 px-2 text-white rounded-r-full'>
       Search
       </button>
    </div>
     </div>
    
    <div className='w-[98%] h-screen flex flex-wrap gap-3 mx-3 my-5'>
     {
          tempFilter.map((items) => {
               return(
                    <Link to={`/product/${items.id}`} key={items.id} >
                    {
                         items.rating.rate >= 4 ? <HofCompo product={items} /> : <ProductData product={items} />
                    }
                    
                    </Link>
               )
          })
     }
    </div>
     </>
  )
}

export default ProductCart