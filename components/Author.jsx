import React from 'react'

const Author = ({ author }) => {
  return (
    <div className=" flex flex-col items-center text-center mt-4 mb-4 md:mt-5 md:mb-8 p-6 md:p-12 rounded-lg bg-[#141414] border-2 border-solid border-[#cccdce]">
      <img
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    <h3 className="text-white mt-0 mb-4 text-xl md:text-2xl font-bold">{author.name}</h3>
    <p className="text-white text-md md:text-xl">{author.bio}</p>
  </div>
  )
}

export default Author