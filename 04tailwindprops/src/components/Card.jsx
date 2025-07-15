function Card ({username , btntext = "visit here"}){
    //  useing direct props.username or 
    // or distructure the props with ({username}) 
    //console.log(props);
    // if in case value of btntext is missing then its uses its default value "visit here"
    console.log(username);

    return(
        <>
               
    <div className="max-w-xs p-6 mt-3 rounded-md shadow-md bg-black">
        <img
          src="https://cdn.pixabay.com/photo/2025/06/16/11/04/utah-9663013_1280.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="bg-blue-600 border-black capitalize">{btntext}</button>
      </div>
        </>
    )
}

export default Card