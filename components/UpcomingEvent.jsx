import React from 'react'
import { getUpcomingEvents } from '@/services'
import Event from './Event'

const UpcomingEvent = ({events}) => {
  return (
    <>
    <div className='eventCards'>
        {events?.map((event)=><Event event={event} key={event.eventName}/>)}
    </div>
    <style jsx>{`
            .eventCards{
                display: grid;
                grid-template-columns:1fr 1fr 1fr;
                gap: 50px 80px;
                padding:20px 0px
            }
            @media screen and (max-width:920px){
                .eventCards {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 50px 80px;
                    padding: 10px 0px
                }
            }
            @media screen and (min-width:920px) and (max-width:1340px) {
                .eventCards {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px 60px;
                    padding: 20px 0px
                }
            }
            @media screen and (max-width:500px){
            .eventCards{
                    gap: 40px 60px;
                }
            }       
        `}</style>
    </>
  )
}

export default UpcomingEvent

export async function getStaticProps(){
  const events= (await getUpcomingEvents())|| [];
  return {
    props:{events}
  }
}