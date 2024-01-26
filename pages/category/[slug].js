import React from 'react'
import Head from 'next/head'
import CatgMenu from '@/components/CatgMenu'
import PostCard from '@/components/PostCard'
import Loader from '@/components/Loader'
import { getCategories, getCategoryPost } from '@/services'
import { useRouter } from 'next/router'
import ScrollToTop from '@/components/ScrollToTop'

const CategoryPost = ({posts}) => {
   const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col mainDiv '>
      <Head>
        <title>Articles</title>
      </Head>
      
      <div className='articles lg:flex-row flex flex-col'>
          <div className='categoriesBox'>
            <CatgMenu/>
          </div>
          <div className='ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-9 lg:mr-9 bg-white rounded-xl artSec'>
            <div className='text-5xl text-center my-2'>Articles</div>
            <div className='postcardBox'>
              {posts.map((post,index)=>(
                <PostCard post={post.node} key={index}/>
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
            padding:10px 20px 40px 20px;
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap:50px 40px;
            justify-items:center;
            align-items:center;
          }
          @media only screen and (max-width:1430px){
            .articles{
              flex-direction:column;
              align-items:center;
            }
            .categoriesBox{
              margin-bottom:10px;
            }
            .postcardBox{
              gap:55px 66px;
            }
          }
          @media only screen and (max-width:1290px){
            .postcardBox{
              gap:50px 40px;
            }
            .artsec{
              margin:0px 15px;
            }
          }
          @media only screen and (max-width:1230px){
            .postcardBox{
              grid-template-columns: 1fr 1fr;
              gap:60px 70px;
              padding:0px 50px;
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
              padding:10px 10vw;
            }
            .artsec{
              margin:0px 0px;
            }
          }
          @media only screen and (max-width: 398px){
            .postcardBox{
              padding:0px 0px 10px 0px;
            }
          }
        `
        }

      </style>
      <ScrollToTop/>
    </div>
  )
}
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}