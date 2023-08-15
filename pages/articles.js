import React from 'react'
import Head from 'next/head'
import Categories from '@/components/Categories'
import CatgMenu from '@/components/CatgMenu'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/services'

const articles = ({posts}) => {
  return (
    <div className='flex flex-col mainDiv '>
      <Head>
        <title>Articles</title>
      </Head>
      
      <div className='articles flex'>
          <div className='categoriesBox'>
            <CatgMenu/>
            {/* <Categories/> */}
          </div>
          <div className='ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8 bg-white rounded-xl artSec'>
            <div className='text-5xl text-center my-2'>Articles</div>
            <div className='postcardBox'>
              {posts.map((post,index)=>(
                <PostCard post={post.node} key={post.title}/>
              ))}
            </div>
          </div>
      </div>
      <style jsx>
        {`
          .mainDiv{
            align-items:center;
            padding-top:10px;
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
          .articles{
            flex-direction:row;
          }
          @media only screen and (min-width:1024px) and (max-width:1430px){
            .postcardBox{
              grid-template-columns: 1fr 1fr;
              padding:10px 6vw 20px 6vw;
            }
          }
          @media only screen and (max-width:1208px){
            .articles{
              flex-direction:column;
            }
            .articles{
              align-items:center;
            }
            .categoriesBox{
              margin-bottom:10px;
            }
          }

          @media only screen and (max-width:1024px){
            .postcardBox{
              grid-template-columns: 1fr;
              padding:10px;
              gap:40px 40px;
            }
            
          }
          @media only screen and (min-width:  475px) and (max-width:645px){
            .postcardBox{
              padding:10vw;
            }
          }
          @media only screen and (max-width: 380px){
            .artSec{
              margin:0px 3px;
            }
            .postcardBox{
              padding:0px 0px 10px 0px;
            }
          }
        `
        }

      </style>
    </div>
  )
}
export default articles

export async function getStaticProps(){
  const posts=(await getPosts()) || [];
  return {
    props:{posts}
  }
}