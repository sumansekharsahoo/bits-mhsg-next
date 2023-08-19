import { Inter } from 'next/font/google'
import Head from 'next/head'
import Carousel from '@/components/Carousel'
import PostWidget from '@/components/PostWidget'
import MusicCard from '@/components/MusicCard'
import EventWidget from '@/components/EventWidget'
import { useState,useEffect } from 'react'
import { getRecentPosts, getRecentEvents } from '@/services'
import moment from 'moment'

const inter = Inter({ subsets: ['latin'] })

const playlists=[
    {
      url:"https://music.youtube.com/playlist?list=PLBhHHAmnlwetWD0kKW072Vl8MZiXA4kBw&feature=share",
      img:"https://yt3.googleusercontent.com/L9sFfCYXxjsEd1esLa7ytlD_p8jOrr_TOPpjPhXcRm58bwLhVPYIEwVspyUvp52HTMtV7eI_KTE=s576",
      title:"Sanjay Leela",
      bgcol:"#d42626",
      fcol:"#ffff"
    },
    {
      url:"https://open.spotify.com/show/3i5TCKhc6GY42pOWkpWveG?si=858d6a7812d643a1",
      img:"https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/96c5c41e-0bc8-4661-b184-ae32006cd726/d623ef0b-3fee-4c26-b815-ae32006cd739/image.jpg?t=1643956581&size=Large",
      title:"The Happiness Lab",
      bgcol:"#69dc72",
      fcol:"#00000"
    },
    {
      url:"https://open.spotify.com/playlist/7eqXTqVEvJ5g5kS45s13gp?si=c854242f32ad48e9",
      img:"/misc/shreya-ghoshal.png",
      title:"Shreya Ghoshal",
      bgcol:"#69dc72",
      fcol:"#00000"
    },

  ]

export default function Home({posts}) {
  const [relatedPosts, setRelatedPosts]=useState([])
  useEffect(()=>{
    getRecentPosts()
      .then((result)=>setRelatedPosts(result));
  },[])

  const [recentEvent, setRecentEvent]=useState([])
  useEffect(()=>{
    getRecentEvents()
      .then((result)=>setRecentEvent(result));
  },[])


  return (
    <div className="Home">
      <Head>
        <title>BITS MHSG</title>
        <meta name="keywords" content="BITS MHSG, Mental Heath, Mental Heath Support Group, BITS, BITS Hyderabad, BITS Pilani"></meta>
        <meta name="description" content="BITS Mental Health Support Group is a pan-campus initiative striving to create awareness about mental health"></meta>
      </Head>
      <div className='bg-[#daf3e8]'>
        <Carousel/>
      </div>

      <div className='secondCont flex flex-col'>
        <div className='pinArticle pinCards bg-white'>
          <div className='Head'>Latest Posts</div>
          <div className='postCont gridCont'>
            {/* <PostWidget/>
            <PostWidget/>
            <PostWidget/> */}
            {relatedPosts.map((post)=>(
              <PostWidget key={post.title} title={post.title} img={post.featuredImage.url} link={post.slug} auth={post.author.name} date={moment(post.date).format('MMM DD, YYYY')} />
            ))}
            <a href='/articles' className='moreArt'>More Articles</a>
          </div>
        </div>
        <div className='latestEvent pinCards bg-white mt-[24px]'>
          <div className='Head'>Latest Events</div>
          <div className='eventCont  gridCont'>
            {recentEvent.map((event)=>(
              <EventWidget key={event.eventName} title={event.eventName} img={event.eventImg.url} loc={event.venue} link={event.link} date={event.date} />
            ))}
            <a href='/events' className='moreArt'>More Events</a>
          </div>
        </div>

        <div className='pinnedMusic pinCards bg-white mt-[24px]'>
          <div className='Head'>Pinned Playlists</div>
          <div className='musicCont gridCont'>
            <MusicCard url={playlists[1].url} img={playlists[1].img} title={playlists[1].title} bgcol={playlists[1].bgcol} fcol={playlists[1].fcol} />
            <MusicCard url={playlists[2].url} img={playlists[2].img} title={playlists[2].title} bgcol={playlists[2].bgcol} fcol={playlists[2].fcol} />
            <MusicCard url={playlists[0].url} img={playlists[0].img} title={playlists[0].title} bgcol={playlists[0].bgcol} fcol={playlists[0].fcol} />
            <a href='/music' className='moreArt'>More Playlists</a>
          </div>
        </div>
      </div>
      
      <style jsx>
        {`
        .secondCont{
          padding: 20px 40px;
        }
          .pinCards{
            display:flex;
            flex-direction:column;
            align-items:center; 
            padding:20px 40px 40px 60px;
            // border-top-left-radius:12px;
            // border-top-right-radius:12px;
            border-radius:12px;
          }
          .Head{
            font-size:35px;
          }
          .gridCont{
            margin-top:12px;
            display:grid;
            gap:80px;
            
            justify-items:center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .moreArt{
            font-size:20px;
            justify-self:start;
            align-self:center;
            text-align:center;
            color:#594df6;
            background-color:#eef0fe;
            padding:10px 18px;
            border-radius:12px;
            transition:all .2s ease-out
          }
          .moreArt:hover{
            background-color:#d8d7fd
          }

          @media only screen and (max-width: 1450px){
            .gridCont{
              gap:40px;
            }
          }
          @media only screen and (max-width: 1260px){
            .gridCont{
              grid-template-columns: 1fr 1fr;
              gap:50px 100px;
            }
            .moreArt{
              justify-self:center;
              font-size:25px;
            }
            .pinCards{
              padding:20px 20px 20px;
            }
          }
          @media only screen and (max-width: 860px){
            .gridCont{
              gap:50px 50px;
            }
            .secondCont{
              padding:20px 30px;
            }
          }
          @media only screen and (max-width: 765px){
            .secondCont{
              padding:20px 10px;
            }
            .gridCont{
              gap:40px 40px;
            }
          }
          @media only screen and (max-width: 685px){
            .gridCont{
              grid-template-columns: 1fr;
            }
            .secondCont{
              padding:20px 18px;
            }
          }
          @media only screen and (max-width: 385px){
            .secondCont{
              padding:20px 10px;
            }
          }


        `}
      </style>
      
    </div>
  )
}


