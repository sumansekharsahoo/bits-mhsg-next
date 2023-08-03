import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '@/components/Carousel'
import PostCard from '@/components/PostCard'
import PostWidget from '@/components/PostWidget'
import { getPosts } from '@/services'
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <div className="Home">
      <Head>
        <title>BITS MHSG</title>
      </Head>
      <div className='bg-[#daf3e8]'>
        <Carousel/>
      </div>
  
      
      
      
    </div>
  )
}


