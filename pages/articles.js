import React from 'react'
import Head from 'next/head'
import CatgMenu from '@/components/CatgMenu'
import PostCard from '@/components/PostCard'
import { useState, useEffect } from 'react'
import { getPosts } from '@/services'
import ScrollToTop from '@/components/ScrollToTop'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';

const articles = ({posts}) => {
  const [post, setPost]=useState([])
  useEffect(()=>{
    getPosts()
      .then((result)=>setPost(result));
  },[])
  return (
    <div className='flex flex-col mainDiv '>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
      <NextSeo 
        title='Articles' 
         openGraph={{
        type: 'website',
        url: 'https://www.bitsmhsg.me/articles',
        title: 'BITS MHSG Articles',
        description: 'Explore our insightful articles on mental health for a brighter mind and a healthier you!',
        images: [
          {
            url: '/official/MHSG_OG.png',
            width: 1200,
            height: 630,
            alt: 'BITS MHSG',
          },
          {
            url: '/official/MHSG_Long.png',
            width: 1024,
            height: 512,
            alt: 'BITS MHSG',
          },
        ],
      }}
      />
      <SocialProfileJsonLd
      type="Organization"
      name="BITS MHSG"
      url="https://www.bitsmhsg.me/articles"
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
      
      <div className='articles flex'>
          <div className='categoriesBox'>
            <CatgMenu/>
          </div>
          <div className='ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8 bg-white rounded-xl artSec'>
            <div className='text-5xl text-center my-2'>Articles</div>
            <div className='postcardBox'>
              {post.map((post,index)=>(
                <PostCard post={post} key={post.title}/>
              ))}
            </div>
          </div>
      </div>
      <ScrollToTop/>
      <style jsx>
        {`
          .artSec{
            margin-bottom: 15px;
          }
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
          .articles{
            flex-direction:row;
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