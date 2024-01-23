import React from 'react'
import Head from 'next/head'
import Event from '@/components/Event'
import styles from '../styles/Events.module.css'
import { getEvents } from '@/services'
import { useState, useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';


const events = ({events}) => {
  const [event, setEvent]=useState([])
  useEffect(()=>{
    getEvents()
      .then((result)=>setEvent(result));
  },[])
  return (
    <div className={styles.events}>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
      <NextSeo 
        title='Events' 
         openGraph={{
        type: 'website',
        url: 'https://www.bitsmhsg.me/events',
        title: 'BITS MHSG Events',
        description: 'Checkout our events page for more details',
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
      url="https://www.bitsmhsg.me/events"
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
      <span className='text-5xl mt-2 mb-[18px] Header'>Events</span>
      <div className={styles.eventCards}>
        {event.map((event)=><Event event={event} key={event.eventName}/>)}
      </div>
      <style jsx>
        {`
        @media screen and (max-width:715px){
          .Header{
            font-size:40px;
          }
        }
        `}
      </style>
      <ScrollToTop/>
    </div>
  )
}

export default events

export async function getStaticProps(){
  const events= (await getEvents())|| [];
  return {
    props:{events}
  }
}