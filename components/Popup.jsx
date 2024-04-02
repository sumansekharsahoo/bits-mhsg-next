import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const tag=[
  {
    tagf:"#ba2416",
    tagb:"#ffe5e0",
  },
  {
    tagf:"#0f7029",
    tagb:"#def6e8",
  }
]

const Popup = (props) => {
  let tr;
  const d = new Date(props.enddate);
  const now= new Date();
  if(now>d){
    tr=0;
  }else{
    tr=1;
  }
  return (
    <div className='popup'>
      <div className='popupInner'>
        <button className="closeBtn" onClick={()=>{props.popup(false)}}><IoClose className='text-[26px]'/></button>
        <div className='eventPopHeader md:text-[32px] text-[26px] text-center'>{props.title}</div>
        <div className='eventPopDetail flex justify-between mt-[10px] sm:mt-[15px] sm:text-[18px]'>
          <p><FaCalendarAlt className='inline mb-[5px] text-[#4064c9] '/> {props.date}</p>
          <p><FaLocationDot className='inline mb-[5px] text-[#c94740]'/> {props.loc}</p>
        </div>
        <div className='eventPopDesc mt-[10px] text-[17px]'>{props.desc}</div>
        <div className='eventPopLinks flex  mt-[10px] sm:mt-[15px] sm:text-[18px]'>
          <a href={props.link} target="_blank" className='elink mr-[10px]'>Event Link</a>
          {tr?<span className='catBox catBox1'>Upcoming</span>:<span className='catBox catBox1'>Past</span> }
        </div>
      </div>
      <style jsx>
        {
          `
          .popup{
            position: fixed;
            top:0;
            left 0;
            width:100%;
            z-index: 100;
            height:100vh;
            background-color: rgba(0,0,0,0.2);
            display: flex;
            justify-content:center;
            align-items:center;
          }
          .popupInner{
            position:relative;
            padding:32px;
            margin:12px;
            width:100%;
            max-width:650px;
            background-color:white;
            border-radius:10px;
          }
          .closeBtn{
            position:absolute;
            top:16px;
            right:16px;
          }
          .catBox{
              color:${tag[tr].tagf};
              background-color:${tag[tr].tagb};
              padding:2px 6px;
              border-radius:6px;
              border:1px solid #b0b0b0;
              font-size:15px;
          }
          .elink{
              font-size:15px;
              padding:2px 6px;
              background-color:white;
              border-radius:6px;
              border:1px solid #b0b0b0;
          }
          .elink:hover{
              background-color:#f5f5f5;
          }
          `
        }
      </style>
    </div>
  )
}

export default Popup