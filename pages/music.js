import React from 'react'
import MusicCard from '@/components/MusicCard'
import Head from 'next/head'
import { getMusic } from '@/services'
import { useState, useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../config/firebase"
import {getDocs, collection, query, where, addDoc,Timestamp, orderBy} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from "../config/firebase"


const music = ({musics}) => {
  const [username, setUsername]=useState("");
  const [musicList, setMusicList]= useState([]);
  const [title, setTitle]= useState("");
  const [link, setLink]= useState("");
  const [selectedOp, setSelectedOp]= useState("8");
  const [userid, setUserId]=useState("");

  const musicCollectionRef= collection(db, "music")
  const q = query(musicCollectionRef);
  // const qme = query(musicCollectionRef,  where("creator", "==", username, orderBy("timestamp"));


  useEffect(()=>{
    auth.onAuthStateChanged(
      async(user)=>{
        if(user){
          let username= user.displayName;
          setUsername(username);
          const uid = user.uid;
          setUserId(uid);
        }
        else{
          setUsername("");
        }
      }
    )
    getMusicList();
  },[]);

  const getMusicList = async ()=>{
    try{
      const data = await getDocs(q);
      const filteredData= data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setMusicList(filteredData);
      console.log(filteredData) 
    } catch (err){
      console.error(err)
    }
  }

  const addHandler= async()=>{
    if(username===""){
      toast.info("Sign in to add playlist",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      try{
        await addDoc(musicCollectionRef, {link: link, creator: username, title:title, player:Number(selectedOp), uid:userid})
      }catch(err){
        console.error(err);
      }
      setTitle("");
      setLink("");
      getMusicList();
    }
  }

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
      img:"/music/radiant-bliss.webp",
      title:"Radiant Bollywood Bliss",
      musicPlayer:'0'
    },
    {
      url:"https://open.spotify.com/playlist/514SZcgMQVFSlvFDOXUq3v",
      img:"/music/midnight-melody-spotify.jpg",
      title:"Midnight Melodies",
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
      tag:"/music/wink.webp"
    },
    {
      id:'8',
      bgcol:"#171717",
      fcol:"#ffff",
      tag:"/music/others.png"
    },
    {
      id:'9',
      bgcol:"#171717",
      fcol:"#ffff",
      tag:"/music/others.png"
    },
  ]
  return (
    <div className='music'>
      <Head>
        <title>Music & Podcasts</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
      <NextSeo 
        title='Music & Podcasts' 
         openGraph={{
        type: 'website',
        url: 'https://www.bitsmhsg.me/music',
        title: 'Music & Podcasts',
        description: 'Unlock a cascade of positivity with our handpicked playlist, elevating your mood one beat at a time!',
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
      url="https://www.bitsmhsg.me/music"
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
        <div className='mainCont'>
            <div className='Head text-4xl pt-2'>Music & Podcasts</div>
            <div className='content'>
              <MusicCard url={playlists[0].url} img={playlists[0].img} title={playlists[0].title}  bgcol={mcolors[playlists[0].musicPlayer].bgcol} fcol={mcolors[playlists[0].musicPlayer].fcol} tag={mcolors[playlists[0].musicPlayer].tag} own="0" docid="0"/>
              <MusicCard url={playlists[1].url} img={playlists[1].img} title={playlists[1].title}  bgcol={mcolors[playlists[1].musicPlayer].bgcol} fcol={mcolors[playlists[1].musicPlayer].fcol} tag={mcolors[playlists[1].musicPlayer].tag}  own="0" docid="0"/>
              <MusicCard url={playlists[2].url} img={playlists[2].img} title={playlists[2].title}  bgcol={mcolors[playlists[2].musicPlayer].bgcol} fcol={mcolors[playlists[2].musicPlayer].fcol} tag={mcolors[playlists[2].musicPlayer].tag}  own="0" docid="0"/>
              <MusicCard url={playlists[3].url} img={playlists[3].img} title={playlists[3].title}  bgcol={mcolors[playlists[3].musicPlayer].bgcol} fcol={mcolors[playlists[3].musicPlayer].fcol} tag={mcolors[playlists[3].musicPlayer].tag}  own="0" docid="0"/>
              {music.map((music)=><MusicCard url={music.link} key={music.playlistTitle} title={music.playlistTitle} img={music.image.url} bgcol={mcolors[music.musicPlayer].bgcol} fcol={mcolors[music.musicPlayer].fcol} tag={mcolors[music.musicPlayer].tag}  own="0" docid="0"/>)}
              {musicList.map((musicObj)=>{
          if(musicObj.creator==username){
            return <MusicCard url={musicObj.link} img={playlists[0].img} title={musicObj.title}  bgcol={mcolors[musicObj.player].bgcol} fcol={mcolors[musicObj.player].fcol} tag={mcolors[musicObj.player].tag}  own="1" docid={musicObj.id}/>
              }else{
                return<MusicCard url={musicObj.link} img={playlists[0].img} title={musicObj.title}  bgcol={mcolors[musicObj.player].bgcol} fcol={mcolors[musicObj.player].fcol} tag={mcolors[musicObj.player].tag}  own="0" docid={musicObj.id}/>
              }
          })}
          </div>
            {/* <div><span>Playlist Link: </span><input type="text" className='bg-[yellow] p-[]'  onChange={(e)=>setNewComment(e.target.value)} value={newComment}/></div>
            <div><span>Playlist Title: </span><input type="text" className='bg-[yellow] p-[]'/></div> */}
            {/* <button className='addYours' onClick={addHandler}>Add your playlists</button> */}
            <div className='addContainer'>
              <div className='sm:text-[30px] text-[25px] font-semibold text-[#4d1eba] sm:mb-[15px] mb-[8px]'>Add your playlists</div>
              <div className='inp linkf'>
                <span>Playlist Link: </span>
                <input type="text" onChange={(e)=>setLink(e.target.value)} value={link} className='sm:w-[380px] w-[55vw]  rounded-md py-[4px] px-[6px]  md:text-[18px] text-[15px]' />
              </div>
              <div className='inp titlef'>
                <span>Playlist Title: </span>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}  className='sm:w-[380px] w-[55vw] rounded-md  py-[4px] px-[6px] md:text-[18px] text-[15px]'/>
              </div>
              <div className='inp sel'>
                <span>Select music service: </span>
                <select name="player" id="player"  value={selectedOp} onChange={e => setSelectedOp(e.target.value)} className='rounded-md  py-[4px] px-[6px] md:text-[18px] text-[15px]' >
                  <option value="9">---Select---</option>
                  <option value="0">Spotify</option>
                  <option value="1">YouTube Music</option>
                  <option value="2">Jio Saavan</option>
                  <option value="3">Amazon Music</option>
                  <option value="4">Gaana</option>
                  <option value="5">Apple Music</option>
                  <option value="7">Wink</option>
                  <option value="8">others</option>
                </select>
              </div>
              <button className='subButton' onClick={addHandler}>Submit</button>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
            
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
            .subButton{
              font-size:21px;
              color:#eef0fe;
              background-color:#594df6;
              padding:5px 16px;
              border-radius:8px;
              margin-top:8px;
            }
            .addContainer{
              display:flex;
              flex-direction:column;
              align-items:center;
              width:600px;
              background-color:#f1e6fa;
              border:2px solid #b0b0b0;
              border-radius:12px;
              padding:10px;
            }
            .inp{
              font-size:20px;
              margin-bottom:15px;
            }
            
            @media screen and (max-width:1440px){
               .content{
                  grid-template-columns: 1fr 1fr 1fr;
                  gap:85px 10vw;
               } 
            }
            @media screen and (max-width:1245px){
               .content{
                  grid-template-columns: 1fr 1fr 1fr;
                  gap:60px 70px;
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
               .inp{
                font-size:17px;
                margin-bottom:8px;
               }
               .addContainer{
                width:90vw;
               }
               .music{
                padding:10px;
               }
               .Head{
                font-size:36px;
               }
               .subButton{
                font-size:17px;
                padding:6px 10px;
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