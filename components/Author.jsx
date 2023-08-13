import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className=" flex flex-col items-center text-center mt-4 mb-4 md:mt-5 md:mb-8 p-6 md:p-12 rounded-lg bg-[#fcefd9] border-2 border-solid border-[#cccdce]">
      <img
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    <h3 className="text-[#5b77b7] mt-0 mb-4 text-xl md:text-2xl font-bold">{author.name}</h3>
    <p className="text-[#5b77b7] text-md md:text-xl">{author.bio}</p>
  </div>
  )
}

export default Author