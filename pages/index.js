import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '@/components/Carousel'
const inter = Inter({ subsets: ['latin'] })

const posts=[
  {title: 'Why Mental Health Matters', excerpt:'Article highlights the importance of ones mental health'},
  {title: 'World mental heath day', excerpt:'The importance of World mental heath day'}
]; 

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>BITS MHSG</title>
      </Head>
      <Carousel/>
      <div className={styles.postcontainer}>
        {posts.map((post,index)=>(
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
      
      
      
    </div>
  )
}
