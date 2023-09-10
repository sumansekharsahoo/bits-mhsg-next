import React from 'react'
import MusicCard from '@/components/MusicCard'
import Head from 'next/head'
import { getMusic } from '@/services'
import { useState, useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'

const music = ({musics}) => {
  const [music, setMusic]=useState([])
  useEffect(()=>{
    getMusic()
      .then((result)=>setMusic(result));
  },[])
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
      img:"/music/radiant-bliss.png",
      title:"Radiant Bollywood Bliss",
      musicPlayer:'0'
    },
    {
      url:"https://open.spotify.com/playlist/514SZcgMQVFSlvFDOXUq3v",
      img:"/music/midnight-melody-spotify.jpg",
      title:"Midnight Melodies",
      musicPlayer:'0'
    },
    {
      url:"https://open.spotify.com/playlist/40sXWmiGMSrbO8ExACXsoL",
      img:"/music/cheerful-vibes.jpg",
      title:"Cheerful Vibes",
      musicPlayer:'0'
    },
//69dc72, 00000 ->spotify
//#d42626, ffff ->YT Music
//

  ]

  const mcolors=[
    {
      id:'0',
      bgcol:"#69dc72",
      fcol:"#00000",
      tag:"/music/spotify.png"
    },
    {
      id:'1',
      bgcol:"#d42626",
      fcol:"#ffff",
      tag:"/music/ytmusic.png"
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
      bgcol:"#252526",
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
      tag:"/music/wink.png"
    },
    {
      id:'8',
      bgcol:"#171717",
      fcol:"#ffff",
      tag:"/music/others.png"
    },
  ]
  return (
    <div className='music'>
      <Head>
        <title>Music & Podcasts</title>
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
        <div className='mainCont'>
            <div className='Head text-4xl pt-2'>Music & Podcasts</div>
            <div className='content'>
              <MusicCard url={playlists[0].url} img={playlists[0].img} title={playlists[0].title}  bgcol={mcolors[playlists[0].musicPlayer].bgcol} fcol={mcolors[playlists[0].musicPlayer].fcol} tag={mcolors[playlists[0].musicPlayer].tag}/>
              <MusicCard url={playlists[1].url} img={playlists[1].img} title={playlists[1].title}  bgcol={mcolors[playlists[1].musicPlayer].bgcol} fcol={mcolors[playlists[1].musicPlayer].fcol} tag={mcolors[playlists[1].musicPlayer].tag}/>
              <MusicCard url={playlists[2].url} img={playlists[2].img} title={playlists[2].title}  bgcol={mcolors[playlists[2].musicPlayer].bgcol} fcol={mcolors[playlists[2].musicPlayer].fcol} tag={mcolors[playlists[2].musicPlayer].tag}/>
              <MusicCard url={playlists[3].url} img={playlists[3].img} title={playlists[3].title}  bgcol={mcolors[playlists[3].musicPlayer].bgcol} fcol={mcolors[playlists[3].musicPlayer].fcol} tag={mcolors[playlists[3].musicPlayer].tag}/>
              <MusicCard url={playlists[4].url} img={playlists[4].img} title={playlists[4].title}  bgcol={mcolors[playlists[4].musicPlayer].bgcol} fcol={mcolors[playlists[4].musicPlayer].fcol} tag={mcolors[playlists[4].musicPlayer].tag}/>
              {music.map((music)=><MusicCard url={music.link} key={music.playlistTitle} title={music.playlistTitle} img={music.image.url} bgcol={mcolors[music.musicPlayer].bgcol} fcol={mcolors[music.musicPlayer].fcol} tag={mcolors[music.musicPlayer].tag}/>)}
            </div>
            <a href="https://forms.gle/pu2NrARyP9ocb1577" target="_blank" className='addYours'>Add your playlists</a>
        </div>
        <style jsx>
          {`
            .music{
              padding:10px 40px 40px 40px ;
            }
            .mainCont{
              display:flex;
              flex-direction:column;
              align-items:center;
              background-color:white;
              border-radius:12px;
              padding:10px 40px 40px 40px;
              
            }
            .Head{
              font-size:40px;
              font-weight:400;
            }
            .content{
              margin-top:28px;
              justify-items:center;
              display:grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap:60px 80px;
              margin-bottom:60px;
            }
            .addYours{
              font-size:23px;
              color:#594df6;
              font-weight:500;
              background-color:#eef0fe;
              padding:10px 18px;
              border-radius:12px;
            }
            .addYours:hover{
              background-color:#d8d7fd
            }

            @media screen and (max-width:1480px){
               .content{
                  grid-template-columns: 1fr 1fr 1fr;
               } 
            }
            @media screen and (max-width:1050px){
              .content{
                  gap:60px 55px;
               }
               .music{
                padding:10px 20px 20px 20px;
               } 
            }
            @media screen and (max-width:1050px){
              .content{
                  grid-template-columns: 1fr 1fr;
                  gap:60px 80px;
               } 
            }
            @media screen and (max-width:660px){
              .content{
                  grid-template-columns: 1fr;
                  gap:40px 100px;
               }
               .music{
                padding:10px;
               }
               .Head{
                font-size:36px;
               }
            }
          `}
        </style>
        <ScrollToTop/>
    </div>
  )
}

export default music

export async function getStaticProps(){
  const musics= (await getMusic())|| [];
  return {
    props:{musics}
  }
}