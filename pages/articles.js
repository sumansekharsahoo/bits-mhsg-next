import React from 'react'
import Categories from '@/components/Categories'
import PostCard from '@/components/PostCard'
const articles = () => {
  return (
    <div className='flex flex-col mainDiv '>
      
      <div className='articles lg:flex-row flex flex-col'>
          <div className='categoriesBox'>
            <Categories/>
          </div>
          <div className='ml-2 mr-2 md:ml-9 md:mr-9  bg-white rounded-xl artSec'>
            <div className='text-5xl text-center my-2'>Articles</div>
            <div className='postcardBox flex flex-wrap justify-center'>
              <PostCard/>
              <PostCard/>
              <PostCard/>
            </div>
          </div>
      </div>
      <style jsx>
        {`
          .mainDiv{
            align-items:center;
          }
          .categoriesBox{
            align-items:center;
          }

          @media only screen and (max-width: 398px){
            .artSec{
              margin:0px 3px
            }
          }
        `
        }

      </style>
    </div>
  )
}

export default articles