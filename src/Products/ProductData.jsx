const ProductData = ({ product }) => {
  const { image, category, title, price, rating } = product;
  return (
    <div>
      <div className="w-[300px] border border-black">
        <div className="w-full bg-green-700">
          <img src={image} className="w-full h-[230px]" />
        </div>
        <div className="py-2 px-3">
          <h1>Categories -: {category}</h1>
          <h2>Title -: {title}</h2>
          <p>Price-:{price}</p>
          <p>Rating -: {rating.rate}</p>
        </div>
        <div className="flex gap-3 py-2 px-3">
          <button className="bg-red-500 text-white py-3 px-5 rounded-md">
            Add to cart
          </button>
          <button className="bg-green-500 text-white py-3 px-5 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductData;


// Creating a higher order component

export const HOF = (ProductData) => {
     return (props) => {
          return(
               <div className="relative">
               <span className="bg-blue-700 text-white px-4 py-1 absolute top-3 left-2">Best Seller</span>
               <ProductData {...props}/>
               </div>
          )
     }
}