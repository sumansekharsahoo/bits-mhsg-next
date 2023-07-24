import React from 'react'
import Profile from '@/components/Profile'
import Head from 'next/head'
const team = () => {
  return (
    <div className='flex flex-col align-middle'>
        <Head>
            <title>Meet our team</title>
        </Head>
        <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        .team-headtxt{
            font-family: 'Fjalla One', sans-serif;
        }
        `
            
        }
        </style>
        <div className='text-center text-4xl sm:text-5xl team-headtxt mt-5 text-[#424242]'>Meet our team</div>
        <div className='flex flex-wrap justify-center'>
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