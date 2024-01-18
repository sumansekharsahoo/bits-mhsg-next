import React from 'react'
import { LuTrash } from "react-icons/lu";
import { deleteDoc,doc } from 'firebase/firestore';
import {db} from "../config/firebase"
import { useState } from 'react';

const colorList=["#99fcd8","#a6c0fa","#f6c8e1","#fc7b53","#fce881","#d1c5fa","#dcf18c","#a7d7fb","#b9f2aa"]

const CommentCell = (props) => {
  const lart= props.commentor[0];
  const delButton= Number(props.delete);
  let key=0; 
  for(let i= 0;i<4;i++){
    key+=props.commentor.charCodeAt(i);
  }
  const colorPicked= colorList[key%9];
  const [display,setDisplay]= useState("block");

  const deleteComment= async()=>{
    const commentDoc=doc(db,"comments",props.cid);
    await deleteDoc(commentDoc);
    setDisplay("none");
  }

  return (
    <div className='flex flex-col text w-[65%]  mb-[24px] border-2 border-[#b0b0b0] px-[10px] py-[14px] rounded-xl ccell' style={{ display }}>
        <div>
            <span className='profilePic'>{lart}</span>
            <span className='commentorName font-medium text-[#474747]'>{props.commentor}</span>
        </div>
        <div className='ml-[44px] mr-[6px] text-[16px] text-[#474747] sm:mr-[20px] sm:text-[18px] sm:ml-[56px] text-wrap break-words'>
            {props.commentText}
        </div>
        <div className='ml-[44px] sm:mr-[20px] sm:ml-[56px] sm:mb-[8px] timeDel h-[36px]'>
            <span>
                {props.timeStamp}
            </span>
            <span>
                {delButton?<button onClick={deleteComment} className='text-[21px] delIcon sm:text-[24px]'><LuTrash /></button>:<span className=''></span>}
            </span>
        </div>
        <style jsx>{`
            .profilePic{
                padding:5px 15px;
                margin-right:10px;
                border-radius:1000px;
                font-size:24px;
                background-color:${colorPicked};
                border:2px solid #b0b0b0;
                user-select: none
            }
            .commentorName{
                font-size:20px;
            }
            .timeDel{
                display:flex;
                justify-content:space-between;
                align-items:flex-end;
            }
            .delIcon{
                padding:6px 8px;
                color:#e35752;
                transition: color 1s ease;
                transition: background-color .2s ease;
                border-radius:20px;

            }
            .delIcon:hover{
                background-color: #e35752;
                color:white 
            }
            @media only screen and (max-width: 1400px){
                .ccell{
                    width:80%;
                }
            }
            @media only screen and (max-width: 500px){
                .ccell{
                    width:95%;
                }
                .profilePic{
                    font-size:20px;
                    padding:5px 13px;
                }
                .commentorName{
                    font-size:18px;
                }
                .profilePic{
                    margin-right:6px;
                }
            }
        `}</style>

    </div>
  )
}

export default CommentCell