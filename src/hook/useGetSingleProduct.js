// Creating our custom hook (Note -: hooks are normal js function which return some data)

import { useEffect, useState } from "react"

const useGetSingleProduct = (ProductId) => {

     const [singleProduct , setSingleProduct] = useState(null)
     useEffect(()=>{
          fetchSingleProduct()
     },[])

     const fetchSingleProduct = async() => {
          const data = await fetch(`https://fakestoreapi.com/products/${ProductId}`)
          const response = await data.json()
          setSingleProduct(response)
     }
     return singleProduct
}

export default useGetSingleProduct