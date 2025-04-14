const CompoC = ({data}) => {
  return (
    <div className='m-5 px-2 py-3 shadow-md rounded-md'>
     <h1>CompoC (Profile) From Prop drilling</h1>
     <p>Name -: {data.name}</p>
     <p>Profession -: {data.skill}</p>
     <p>Email -: {data.email}</p>
    </div>
  )
}

export default CompoC