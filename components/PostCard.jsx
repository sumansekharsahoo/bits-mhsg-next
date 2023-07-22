import React from 'react'

const PostCard = ({post}) => {
  console.log(post)
  return (
    <div className='bg-[#1677d9] postcard flex flex-col w-'>

        <div className=''>
          <img src={post.featuredImage.url} alt={post.title} className='h-80 object-cover' />
        </div>
    </div>
  )
}

export default PostCard