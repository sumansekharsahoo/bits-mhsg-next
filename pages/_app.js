import React,{useState, useEffect} from 'react'
import { Layout } from '../components/index'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // function Loading(){


  //   const router=useRouter();
  //   const [loading, setLoading]=useState(false);
  //   useEffect(()=>{
  //     const handleStart=(url)=>(url!==router.asPath) && setLoading(true);
  //     const handleComplete=(url)=>(url===router.asPath) && setTimeout(()=>{setLoading(false)}) ;
  //     router.events.on('routeChangeStart', handleStart);
  //     router.events.on('routeChangeComplete', handleComplete);
  //     router.events.on('routeChangeStart', handleComplete);
  
  //     return()=>{
  //       router.events.off('routeChangeStart',handleStart);
  //       router.events.off('routeChangeComplete',handleComplete);
  //       router.events.off('routeChangeError',handleComplete);
  //     }
  //   })
  //   return loading && (
  //     <div className='spinner-wrapper'>
  //       <div className='spinner'/>
  //     </div>
  //   )
  // }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

