import React from 'react'
import { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
const colors=[
    
    {
        bgcol:"#e8f5fc",
        hbgcol:"#cfe5fa",
        tcol:"#245491",
        htcol:"#001d51",
        brcol:"#1C468E",
        tagf:"#ba2416",
        tagb:"#ffe5e0",
        widp:"50%",
        bwidp:"58%"
    },
    {
        bgcol:"#e8f5fc",
        hbgcol:"#cfe5fa",
        tcol:"#245491",
        htcol:"#001d51",
        brcol:"#1C468E",
        tagf:"#0f7029",
        tagb:"#def6e8",
        widp:"66%",
        bwidp:"66%"
    },
    // {
    //     bgcol:"#f6f0fc",
    //     hbgcol:"#f2e3ff",
    //     tcol:"#551497",
    //     htcol:"#37017a",
    //     brcol:"#313131",
    //     tagf:"#ba2416",
    //     tagb:"#ffe5e0",
    //     widp:"50%"
    // },
    
]

const Event = ({event}) => {
    const d = new Date(event.endDate);
    const now= new Date();
    let tr;
    if(now>d){
        tr=0;
    }else{
        tr=1;
    }
    const [flip, setFlip]=useState(false);
  return (
    // <a href={event.link} target="_blank">
    <div  onClick={()=>setFlip(!flip)} className={`card ${flip?'flip':''}`}>
    <div className='event front'>
        <img src={event.eventImg.url} alt="eventImg" className='eventImg' />
        <div className='eventInfo'>
            <span className='eventHead'>{event.eventName}</span>

            <div className='flex edate eventDTV'>
            <FaCalendarAlt/>
            <span className='eventDate'>{event.date}</span>
            </div>
            <div className='eventDTV flex eTimeVenue'>
            <span className='eventTime'>{event.time}</span>
            <span className='sep sep2'>|</span>
            <span className='eventVenue'>{event.venue}</span>
            </div>
            {/* <span className='sep sep1'>|</span> */}
            
        </div>
        <div className='footbox'>
            {tr?<span className='catBox catBox1'>Upcoming</span>:<span className='catBox catBox1'>Past</span> }
            <button className='flipbtn'> More Info </button>
        </div>
    </div>
    <div className='event back'>
        {/* <img src={event.eventImg.url} alt="eventImg" className='eventImg' /> */}
        <div className='eventInfo'>
            <span className='eventHead'>{event.eventName}</span>

        
            <div className='eventDesc'>{event.eventDesc}</div>
        </div>
        <div className='backbtngrp'>
            <a href={event.link} target="_blank" className='elink'>{tr?'Event Link':'Event Link'}</a>
            {tr?<span className='catBox catBox2'>Upcoming</span>:<span className='catBox catBox2'>Past</span> }
        </div>
        <div className='smallTxt'>Click to flip</div>
    </div>

        <style jsx>
            {`
                .event{
                    border:2px solid #b0b0b0;
                    padding:10px 10px 18px 10px;
                    border-radius:18px; 
                    display:flex;
                    flex-direction:column; 
                    background-color:${colors[tr].bgcol};
                    width:350px;
                    color:${colors[tr].tcol};
                    align-items:center;
                    transition: 450ms;
                    cursor:pointer;
                }
                .event:hover{
                    color:${colors[tr].htcol};
                    background-color:${colors[tr].hbgcol};
                    border:2px solid ${colors[tr].brcol};
                }
                .event:hover .eventImg{
                    border:2px solid ${colors[tr].brcol};
                }
                .eventImg{
                    border:2px solid #b0b0b0;
                    // transition:height .5s ease-out;
                    height:330px;
                    width:330px;
                    object-fit:cover;
                    border-radius:18px;
                    transition: all .2s ease-out;
                }
                .eventInfo{
                    padding:4px 8px 0px 8px;
                    // height:205px;
                    text-align:center;

                }
                .eventDesc{
                    margin-top:5px;
                    font-size:17px;
                }
                .eventDTV{
                    // margin-bottom:4px;
                    text-align:center;
                    font-size:17px;
                }
                .edate{
                    margin-top:2px;
                    align-items:center;
                    justify-content:center;
                }
                .eTimeVenue{
                    margin-bottom:7px;
                    align-items:center;
                    justify-content:center;
                }
                .eventDate{
                    margin-left:7px;
                }
                .eventHead{
                    font-size:25px;
                    line-height: 1.3;
                    font-weight:500;
                }
                .sep{
                    margin:0px 4px;
                    font-weight:500;
                }
                .catBox{
                    // margin-left: 15px;
                    color:${colors[tr].tagf};
                    background-color:${colors[tr].tagb};
                    padding:2px 8px;
                    // border-bottom-left-radius:5px;
                    // border-top-right-radius:16px;
                    // right:11.5px;
                    // top:11px;
                    border-radius:8px;
                    border:1px solid #b0b0b0;
                    font-size:18px;
                }
                .flipbtn{
                    font-size:18px;
                    padding:3px 8px;
                    background-color:white;
                    border-radius:8px;
                    border:1px solid #b0b0b0;
                }
                .flipbtn:hover{
                    background-color:#f5f5f5;
                }
                .footbox{
                    display:flex;
                    width:${colors[tr].widp};
                    justify-content:space-between;
                }
                .card{
                    display:flex;
                    position:relative;
                    align-items:center;
                    justify-content:center;
                    height:490px;
                    transform: perspective(1000px) rotateY(var(--rotate-y,0));
                    transform-style:preserve-3d;
                    transition: 450ms;

                }

                .card.flip{
                    --rotate-y:180deg;
                }

                .card .front,
                .card .back{
                    position:absolute;
                    backface-visibility:hidden;
                    -webkit-backface-visibility: hidden;
                }

                .back{
                    height:470px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }

                .backbtngrp{
                    display:flex;
                    width:${colors[tr].bwidp};
                    justify-content:space-between;
                    margin-top:25px;
                }

                .elink{
                    font-size:18px;
                    padding:3px 8px;
                    background-color:white;
                    border-radius:8px;
                    border:1px solid #b0b0b0;
                }
                .elink:hover{
                    background-color:#f5f5f5;
                }
                .card .back{
                    transform:rotateY(180deg);
                }

                .smallTxt{
                    position:absolute;
                    bottom:6px;
                    font-size:13px;
                }
                @media screen and (max-width:810px){
                    .event{
                        width:320px;
                    }
                    .eventImg{
                        width:300px;
                        height:300px;
                    }
                    .card{
                        height:450px;
                    }
                    .footbox{
                        width:${tr?'72%' : '55%'};
                    }
                    .backbtngrp{
                        width:${tr?'72%' : '62%'}
                    }
                }
                // @media screen and (max-width:380px){
                //     .event{
                //         width:335px;
                //     }
                //     .eventImg{
                //         width:312px;
                //     }
                //     .eventInfo{
                //         height:230px;
                //     }
                // }

            `}
        </style>
    </div>
    // </a>
  )
}

export default Event