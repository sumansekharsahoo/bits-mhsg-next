import React from 'react'
import { LuTrash } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { deleteDoc,doc,updateDoc} from 'firebase/firestore';
import {db} from "../config/firebase"
import { useState } from 'react';

const ConfessCell = (props) => {
    const [display,setDisplay]= useState("block");

    const deleteConfess= async()=>{
    const commentDoc=doc(db,"confess",props.cid);
        await deleteDoc(commentDoc);
        setDisplay("none");
    }

    const markResolved= async()=>{
    const confupdate=doc(db,"confess",props.cid);
        await updateDoc(confupdate,{resolved:true});
        setDisplay("none");
    }
    let edit= props.mark;
    let done= props.resolved
    let adminedit=edit && !done
    return (
    <div className='confessContainer px-[12px] py-[8px] rounded-xl border-[2px] border-[#b0b0b0] lg:w-[70%] sm:w-[80%] w-[95%] flex flex-col align-middle text-[#474747]' style={{display}}>
        <div className='md:text-[24px] text-[20px] flex justify-between'><span className=''>{props.name}</span>{done?<span className='text-[#319c3a]'><GoCheckCircle  className='inline pb-[5px]'/> Resolved</span>:<span className='text-[#e1864a]'><GoClock className='inline'/> Pending</span>}</div>
        <div className='text-[14px] md:text-[18px]'><span>{props.mail}</span></div>
        <div className='text-[14px] md:text-[18px] my-[6px]'>{props.txt}</div>
        <div className='flex justify-between'>
            <span className='md:text-[18px] text-[14px]'>
                {props.timeStamp}
            </span>
            <span>
                {adminedit?<button onClick={markResolved} className='bg-[#eadb68] p-[5px] rounded-md md:text-[18px] text-[14px]'>mark resolved</button>:<></>}
                {edit?<a href='mailto:mhsg@hyderabad.bits-pilani.ac.in'  target="_blank" className='border-[1px] border-[#b0b0b0] rounded-md px-[5px] py-[5px] md:text-[18px] text-[14px] bg-[#95dcbd]'>Resolve <GoArrowRight className='inline'/></a>:<button onClick={deleteConfess} className='text-[21px] delIcon sm:text-[24px]'><LuTrash /></button>}
            </span>

        </div>
        <style jsx>{`
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
        `}</style>
    </div>
  )
}

export default ConfessCell