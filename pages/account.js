import React from 'react'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import { getAuth, deleteUser } from "firebase/auth";
import {auth} from "@/config/firebase"
import {onAuthStateChanged} from "firebase/auth";
import { useRouter } from 'next/router';
import {getDocs, collection, query, where, deleteDoc,doc,Timestamp, orderBy } from "firebase/firestore"
import {db} from "../config/firebase"
import CommentCell from '@/components/CommentCell'
import moment from 'moment';
import MusicCard from '@/components/MusicCard'
import ConfessCell from '@/components/ConfessCell';

const account = () => {
    const router = useRouter();
    const [username, setUsername]=useState("");
    const [musicList, setMusicList]= useState([])
    const [commentList, setCommentList]= useState([]);
    const [confessList, setConfessList]= useState([]);
   
    let qc;
    let qm;
    let qcf;
    
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
    {
      id:'9',
      bgcol:"#171717",
      fcol:"#ffff",
      tag:"/music/others.png"
    },
  ]

    const getCommentList = async ()=>{
        try{
        const data = await getDocs(qc);
        const filteredData= data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
        }));
        setCommentList(filteredData);
        console.log(commentList)
        } catch (err){
        console.error(err)
        }
    }

    const getConfessList = async ()=>{
        try{
        const data = await getDocs(qcf);
        const filteredData= data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
        }));
        setConfessList(filteredData);
        } catch (err){
        console.error(err)
        }
    }

    const getMusicList = async ()=>{
    try{
      const data = await getDocs(qm);
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


  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const userid = user.uid;
        
        setUsername(displayName);
        const commentCollectionRef= collection(db, "comments")
        qc = query(commentCollectionRef, where("uid", "==", userid));
        getCommentList();
        const musicCollectionRef= collection(db, "music")
        qm = query(musicCollectionRef, where("uid",'==',userid));
        getMusicList();
        const confessCollectionRef= collection(db, "confess")
        qcf = query(confessCollectionRef, where("uid",'==',userid));
        getConfessList();
      } else {
        router.push('/');
      }
    });
  },[])
  return (
    <div>
        <Head>
            <title>Account</title>
        </Head>
        <div className='accCont'>
          <div className='bg-[#dff2e9] h-[280px] w-full flex py-[10px] px-[40px] items-center hero'>
              <img src="/official/MHSG_Short.png" alt="MHSGshort" className='image'/>
              <div className='text-5xl heading text-[#51b39c] font-semibold'>Hi {username},</div>
          </div>
          <div className='mainContainer'>
            <div className='commentContainer innerContainer'>
                <div className='text-center sm:text-[32px] text-[28px] sm:mt-[10px] mt-[6px]'>Your comments</div>
                <div className='commentCards'>
                    {commentList.map((commentObj)=>{
                      return <CommentCell commentor={commentObj.commentor} commentText={commentObj.commentText} timeStamp={moment(commentObj.timestamp.seconds*1000).format("lll")} delete="1" cid={commentObj.id}/>
                  })}
                  {commentList.length?<></>:<div className='text-[18px] sm:w-[65vw] w-[85vw] text-center mb-[10px]'>No Comments yet</div>}
                </div>
            </div>
            <div className='commentContainer innerContainer'>
                <div className='text-center sm:text-[32px] text-[28px] sm:mt-[10px] mt-[6px]'>Seek help queries</div>
                <div className='confessCards flex flex-col align-middle'>
                    {confessList.map((confObj)=>{
                      return <ConfessCell name={confObj.name} txt={confObj.txt} timeStamp={moment(confObj.timestamp.seconds*1000).format("lll")} mail={confObj.mail} cid={confObj.id} resolved={confObj.resolved} mark={false}/>
                    })}
                    {confessList.length?<></>:<div className='text-[18px] sm:w-[65vw] w-[85vw] text-center mb-[10px]'>No queries yet</div>}

                </div>
            </div>
            <div className='musicContainer innerContainer'>
                <div  className='text-center sm:text-[32px] text-[28px] sm:mt-[10px] mt-[6px]'>Your playlists </div>
                <div className='px-[10px] md:px-[20px] py-[15px] mb-[10px] flex flex-wrap w-[95vw] sm:w-[80vw] lg:w-[65vw] justify-around'>
                  {musicList.map((musicObj)=>{
                    if(musicObj.creator==username){
                      return <MusicCard url={musicObj.link} img="/music/radiant-bliss.png" title={musicObj.title}  bgcol={mcolors[musicObj.player].bgcol} fcol={mcolors[musicObj.player].fcol} tag={mcolors[musicObj.player].tag}  own="1" docid={musicObj.id}/>
                        }else{
                          return<MusicCard url={musicObj.link} img="/music/radiant-bliss.png" title={musicObj.title}  bgcol={mcolors[musicObj.player].bgcol} fcol={mcolors[musicObj.player].fcol} tag={mcolors[musicObj.player].tag}  own="0" docid={musicObj.id}/>
                        }
                    })}
                    {musicList.length?<></>:<div>No playlists yet- Add your playlists <a href="/music" className='text-[#255e9e] text-[18px] sm:w-[65vw] w-[85vw] text-center '> here</a></div>}
                </div>
            </div>
          
          </div>
        </div>
        <style jsx>{`
            .accCont{
              display:flex;
              flex-direction:column;
              align-items:center;
            }
            .image{
                height: 180px;
                object-cover:fit;
                margin-right:60px;
            }
            .mainContainer{
              display:flex;
              flex-direction:column;
              align-items:center;
              width:95vw;
              margin-top:16px;
            }
            .innerContainer{
              background-color:white;
              border-radius:10px;
              margin-bottom:20px;
            }
            
            .commentContainer{
              width:65vw;
            }
            .commentCards{
              display:flex;
              flex-direction:column;
              align-items:center;
              padding:10px 0px 5px 0px; 
            }
            .confessCards{
              display:flex;
              flex-direction:column;
              align-items:center;
              padding:10px 0px 25px 0px; 
            }
            @media only screen and (max-width: 900px){
              .commentContainer{
                width:80vw;
              }
            }

            @media only screen and (max-width: 650px){
                .image{
                    height:100px;
                    margin-right:32px;
                }
                .heading{
                    font-size:30px;
                }
                .hero{
                    height:150px;
                }
                .fontSz{
                    font-size:16px;
                }
                .commentContainer{
                  width:95vw;
                }
            }
        `}</style>
    </div>
  )
}

export default account