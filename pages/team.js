import React from 'react'
import Profile from '@/components/Profile'
import Head from 'next/head'
const team = () => {
  return (
    <div className='flex flex-col align-middle'>
        <Head>
            <title>Meet our team</title>
        </Head>
        <style jsx>{`
        
        .profCont{
          padding:40px;
          justify-items:center;
          gap:50px 30px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media screen and (min-width:1020px) and (max-width:1330px){
          .profCont{
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media screen and (min-width:660px) and (max-width:1020px){
          .profCont{
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width:680px){
          .profCont{
            grid-template-columns: 1fr;
          }
        }
        `
            
        }
        </style>
        <div className='text-center text-4xl sm:text-5xl team-headtxt mt-5'>Meet our team</div>
        <div className='profCont'>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
            <Profile insta='https://www.instagram.com/bits.mhsg/' linkin='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'/>
        </div>
        
    </div>
  )
}

export default team