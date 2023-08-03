import React from 'react'
import Head from 'next/head'
import Event from '@/components/Event'
import styles from '../styles/Events.module.css'
import { getEvents } from '@/services'

const events = ({events}) => {
  // const evtDet=[{eimg:"https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fw_800%2Fv1680114825%2Foctzymzrrz68ez7qvk4i.jpg",Head:"Art Therapy", Desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas voluptatum perspiciatis obcaecati natus at nemo optio eveniet commodi! Itaque iusto voluptas aspernatur."},{eimg:"https://img.freepik.com/free-photo/close-up-hand-holding-delicious-burger_23-2149160036.jpg?w=360&t=st=1690258076~exp=1690258676~hmac=49be48498401098150c360e6c7e678cdc36c7b0f50da8ffffaab24e215b72b89",Head:"Art Therapy BITS MHSG asicd", Desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut aspernatur nihil quis. Quos doloribus reprehenderit dicta asperiores nostrum, quibusdam voluptatibus quidem in assumenda aliquam, blanditiis doloremque ullam perspiciatis suscipit."}]
  return (
    <div className={styles.events}>
      <Head>
        <title>Events</title>
      </Head>
      <span className='text-5xl mt-2 Header'>Events</span>
      <div className={styles.eventCards}>
        {events.map((event)=><Event event={event.node} key={event.eventName}/>)}
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