import React from 'react'
import { getPosts,getPostDetails } from '@/services'
import PostContent from '@/components/PostContent'
import Author from '@/components/Author'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from '@/components/Loader'
import ScrollToTop from '@/components/ScrollToTop'
import Sharebuttons from '@/components/Sharebuttons'
import Comment from '@/components/Comment'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';

const PostDetails = ({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  const posturl= 'https://bitsmhsg.vercel.app/'+post.slug;
  return (
    <div className='container mx-auto px-1.5 md:px-4 lg:px-16 my-2 md:my-6 alignclass'>
        <Head>
          <title>Post</title>
        </Head>
        <NextSeo 
        title={post.title}
         openGraph={{
        type: 'website',
        url: {posturl},
        title: post.title,
        description: 'Explore our insightful articles on mental health for a brighter mind and a healthier you!',
        images: [
          {
            url: '/official/MHSG_Short.png',
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
      url={posturl}
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
        <PostContent post={post}/>
        <Sharebuttons title={post.title} slug={post.slug}/>
        <Comment slug={post.slug}/>
        <Author author={post.author}/>
        <ScrollToTop/>
        <style jsx>{`
          .alignclass{
            display:flex;
            flex-direction: column;
            align-items:center;
          }
        `}</style>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
  const data=await getPostDetails(params.slug);
  return {
    props:{post: data}
  }
}

export async function getStaticPaths(){
    const posts = await getPosts();

    return{
        paths: posts.map(({slug})=>({params: {slug}})),
        fallback: true
    }
}