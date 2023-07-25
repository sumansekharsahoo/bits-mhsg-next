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
          <div className='ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-9 lg:mr-9 bg-white rounded-xl artSec'>
            <div className='text-5xl text-center my-2'>Articles</div>
            <div className='postcardBox'>
              <PostCard/>
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
          .postcardBox{
            padding:10px 20px 20px 20px;
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap:50px 40px;
            justify-items:center;
            align-items:center;
          }
          @media only screen and (min-width:1024px) and (max-width:1430px){
            .postcardBox{
              grid-template-columns: 1fr 1fr;
              padding:10px 6vw 20px 6vw;
            }
          }
          @media only screen and (max-width:1024px){
            .postcardBox{
              grid-template-columns: 1fr;
              padding:10px;
              gap:10px 40px;
            }
          }
          @media only screen and (min-width:  475px) and (max-width:645px){
            .postcardBox{
              padding:10vw;
            }
          }
          @media only screen and (max-width: 398px){
            .artSec{
              margin:0px 3px;
            }
            .postcardBox{
              padding:0px;
            }
          }
        `
        }

      </style>
    </div>
  )
}

export default articles