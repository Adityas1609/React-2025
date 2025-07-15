import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
// insted of useEffect , using loader (useLoaderdata) for rendering the data 
    const data = useLoaderData()

//    const [data ,setdata ] = useState([])

//     useEffect(() =>{
//         fetch('https://api.github.com/users/Adityas1609')
//         .then(respose => respose.json())
//         .then(data => {
//             console.log(data);
//             setdata(data)
//         })
//     },[])
  return (
    <div className='bg-gray-400 text-3xl font-bold text-center'>Github Followers: {data.followers} 

    

    <img src={data.avatar_url} alt="Git picture" width={300} />

   
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Adityas1609')
    return response.json()
}

