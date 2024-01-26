import { Inter } from 'next/font/google'
import Head from 'next/head'
import Carousel from '@/components/Carousel'
import PostWidget from '@/components/PostWidget'
import MusicCard from '@/components/MusicCard'
import EventWidget from '@/components/EventWidget'
import { useState,useEffect } from 'react'
import { getRecentPosts, getRecentEvents } from '@/services'
import moment from 'moment'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

const playlists=[
    {
      url:"https://open.spotify.com/show/6qCGowS3fs0qFYMlxczxC5",
      img:"/music/mentally-yours.png",
      title:"Mentally Yours",
      musicPlayer:'0'
    },
    {
      url:"https://open.spotify.com/show/3i5TCKhc6GY42pOWkpWveG?si=858d6a7812d643a1",
      img:"https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/96c5c41e-0bc8-4661-b184-ae32006cd726/d623ef0b-3fee-4c26-b815-ae32006cd739/image.jpg?t=1643956581&size=Large",
      title:"The Happiness Lab",
      musicPlayer:'0'
    },
    {
      url:"https://open.spotify.com/playlist/0NuENKeHb4HvGmKkwmVi8N",
      img:"/music/radiant-bliss.webp",
      title:"Radiant Bollywood Bliss",
      musicPlayer:'0'
    },
  ]

  const mcolors=[
    {
      id:'0',
      bgcol:"#69dc72",
      fcol:"#00000",
      tag:"/music/spotify.webp"
    },
    {
      id:'1',
      bgcol:"#d42626",
      fcol:"#ffff",
      tag:"/music/ytmusic.webp"
    },
    {
      id:'2',
      bgcol:"#60c9b1",
      fcol:"#242a30",
      tag:"/music/jiosavan.png"
    },
    {
      id:'3',
      bgcol:"#440ff5",
      fcol:"#ffff",
      tag:"/music/amazon.png"
    },
    {
      id:'4',
      bgcol:"#d7473b",
      fcol:"#ffff",
      tag:"/music/gaana.png"
    },
    {
      id:'5',
      bgcol:"#e86170",
      fcol:"#ffff",
      tag:"/music/apple.png"
    },
    {
      id:'6',
      bgcol:"#ee7635",
      fcol:"#f7f4f4",
      tag:"/music/soundcloud.png"
    },
    {
      id:'7',
      bgcol:"#dc4442",
      fcol:"#f7f4f4",
      tag:"/music/wink.webp"
    },
    {
      id:'8',
      bgcol:"#171717",
      fcol:"#ffff",
      tag:"/music/others.png"
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="keywords" content="BITS MHSG, Mental Heath, Mental Heath Support Group, BITS, BITS Hyderabad, BITS Pilani"></meta>
        <meta name="description" content="BITS Mental Health Support Group is a pan-campus initiative striving to create awareness about mental health"></meta>
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
      <NextSeo 
        title='BITS MHSG' 
        description='BITS Mental Health Support Group is a pan-campus initiative striving to create awareness about mental health'
        canonical='https://www.bitsmhsg.me/'
         openGraph={{
        type: 'website',
        url: 'https://www.bitsmhsg.me/',
        title: 'BITS Mental Health Support Group',
        description: 'BITS Mental Health Support Group is a pan-campus initiative striving to create awareness about mental health',
        images: [
          {
            url: '/official/MHSG_OG.png',
            width: 1200,
            height: 630,
            alt: 'BITS MHSG',
          },
          {
            url: '/official/MHSG_Long.webp',
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
      url="https://www.bitsmhsg.me/"
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
      <div className='bg-[#daf3e8]'>
        <Carousel/>
      </div>

      <div className='secondCont flex flex-col'>      
        <div className='pinArticle pinCards bg-white'>
          <div className='Head'>Latest Articles</div>
          <div className='postCont gridCont'>
            {relatedPosts.map((post)=>(
              <PostWidget key={post.title} title={post.title} img={post.featuredImage.url} link={post.slug} auth={post.author.name} date={moment(post.date).format('MMM DD, YYYY')}/>
            ))}
            <a href='/articles' className='moreArt'>More Articles</a>
          </div>
        </div>
        <div className='latestEvent pinCards bg-white mt-[24px]'>
          <div className='Head'>Latest Events</div>
          <div className='eventCont  gridCont'>
            {recentEvent.map((event)=>(
              <EventWidget key={event.eventName} title={event.eventName} img={event.eventImg.url} loc={event.venue} link={event.link} date={event.date}  isUpcoming={event.upcomingEvent} />
            ))}
            <a href='/events' className='moreArt'>More Events</a>
          </div>
        </div>

        <div className='pinnedMusic pinCards bg-white mt-[24px]'>
          <div className='Head'>Pinned Playlists</div>
          <div className='musicCont gridCont'>
            <MusicCard url={playlists[0].url} img={playlists[0].img} title={playlists[0].title}  bgcol={mcolors[playlists[0].musicPlayer].bgcol} fcol={mcolors[playlists[0].musicPlayer].fcol} tag={mcolors[playlists[0].musicPlayer].tag} docid="0" own="0"/>
              <MusicCard url={playlists[1].url} img={playlists[1].img} title={playlists[1].title}  bgcol={mcolors[playlists[1].musicPlayer].bgcol} fcol={mcolors[playlists[1].musicPlayer].fcol} tag={mcolors[playlists[1].musicPlayer].tag} docid="0" own="0"/>              <MusicCard url={playlists[2].url} img={playlists[2].img} title={playlists[2].title}  bgcol={mcolors[playlists[2].musicPlayer].bgcol} fcol={mcolors[playlists[2].musicPlayer].fcol} tag={mcolors[playlists[2].musicPlayer].tag} docid="0" own="0"/>
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
            font-size:38px;
            margin-bottom:10px;
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
            .moreArt{
              // justify-self:center;
              font-size:19px;
              padding:5px 10px;
              border-radius:7px;
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


