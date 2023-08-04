import React from 'react'
import MusicCard from '@/components/MusicCard'
import Head from 'next/head'
import { getMusic } from '@/services'


const music = ({musics}) => {
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
//69dc72, 00000 ->spotify
//#d42626, ffff ->YT Music
//

  ]
  return (
    <div className='music'>
      <Head>
        <title>Music & Podcasts</title>
      </Head>
        <div className='mainCont'>
            <div className='Head text-4xl pt-2'>Music & Podcasts</div>
            <div className='content'>
              <MusicCard url={playlists[1].url} img={playlists[1].img} title={playlists[1].title} bgcol={playlists[1].bgcol} fcol={playlists[1].fcol} />
              <MusicCard url={playlists[2].url} img={playlists[2].img} title={playlists[2].title} bgcol={playlists[2].bgcol} fcol={playlists[2].fcol} />
              <MusicCard url={playlists[0].url} img={playlists[0].img} title={playlists[0].title} bgcol={playlists[0].bgcol} fcol={playlists[0].fcol} />
              {musics.map((music)=><MusicCard url={music.node.link} key={music.playlistTitle} title={music.node.playlistTitle} img={music.node.image.url} bgcol={music.node.backgroundColor.hex.toString()} fcol={music.node.fontColor.hex.toString()}/>)}
            </div>
            <a href="https://docs.google.com/forms" target="_blank" className='addYours'>Add your playlists</a>
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
            }
          `}
        </style>
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