import React from 'react'
import { getPosts,getPostDetails } from '@/services'
import PostContent from '@/components/PostContent'
import Author from '@/components/Author'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from '@/components/Loader'

const PostDetails = ({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto px-1.5 md:px-4 lg:px-16 my-2 md:my-6'>
        <Head>
          <title>Articles/Post</title>
        </Head>
        <PostContent post={post}/>
        <Author author={post.author}/>
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