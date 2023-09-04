import React from 'react'
import Head from 'next/head'
import Event from '@/components/Event'
import styles from '../styles/Events.module.css'
import { getEvents } from '@/services'
import { useState, useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'


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
      </Head>
      <span className='text-5xl mt-2 Header'>Events</span>
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