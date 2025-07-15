import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const {id} = useParams()

  return (
    <>
    <div className='w-full h-[60vh] flex items-center justify-center'>
      <div className=' bg-emerald-500 text-3xl px-5 py-3 rounded-md font-extrabold capitalize '>User : {id}</div>
    </div>
    </>
  )
}

export default User