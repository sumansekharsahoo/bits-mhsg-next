import React from 'react'
import { LuTrash } from "react-icons/lu";
import { deleteDoc,doc } from 'firebase/firestore';
import {db} from "../config/firebase"
import { useState } from 'react';
import Jdenticon from 'react-jdenticon';

const MusicCard = (props) => {
    const [display,setDisplay]= useState("block");
    let delButton;
    if(props.own==="0"){
        delButton=false;
    }else{
        delButton=true;
    }
    let jend;
    if(props.docid==="0"){
        jend=false;
    }else{
        jend=true;
    }
    const deleteMusic= async()=>{
    const commentDoc=doc(db,"music",props.docid);
    await deleteDoc(commentDoc);
    setDisplay("none");
  }
  return (
    <div className='musicCardCont flex flex-col items-center'  style={{ display }}>
        {jend?<a href={props.url} target="_blank" ><Jdenticon size="258.8" value={props.docid} /></a>: <a href={props.url} target="_blank" ><img src={props.img} alt="playlistImg" className='musicImg'/></a>}
        
        <a href={props.url} target="_blank"  className='title block'>
            {props.title}
        </a>
        <a href={props.url} target="_blank"><img src={props.tag} alt="*" className='playerIcon'/></a>
        <style jsx>
            {`
            .musicCardCont{
                position:relative;
                width:280px;
                border-radius:8px;
                background-color: ${props.bgcol};
                color:${props.fcol};
                border:2px solid #b0b0b0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding:9px 9px 5px 9px;
                transition: all 0.15s ease-out; 
                align-items:center; 
            }
            .musicCardCont:hover{
                box-shadow:0px 1px 10px 2px #c2c2c2; 
            }
            .musicImg{
                object-fit:cover;
                border-radius:8px;
            }
            .title{
                font-size:19px;
                text-align:center;
                width:260px;  
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .playerIcon{
                position:absolute;
                width:28px;
                bottom:40px;
                right:15px;
                border-radius:3px;
            }
            .delIcon{
                padding:6px 8px;
                border-radius:20px;
                background-color: white;
                color:#e35752;
                position:absolute;
                top:0px;
                right:0px;
                transition: color 1s ease;
                transition: background-color .2s ease;
            }
            .delIcon:hover{
                background-color: #e35752;
                color:white;
            }
            `}
        </style>
        {delButton?<button onClick={deleteMusic} className='text-[21px] delIcon sm:text-[24px]'><LuTrash /></button>:<span className=''></span>}

    </div>
  )
}

export default MusicCard