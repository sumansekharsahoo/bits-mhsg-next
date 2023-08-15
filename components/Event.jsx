import React from 'react'
import Image from 'next/image'
import moment from 'moment'

const colors=[
    {
        bgcol:"#f6f4ed",
        hbgcol:"#e4e4dd",
        tcol:"#313131",
        htcol:"#00000",
        brcol:"#313131",
        tagf:"#ba2416",
        tagb:"#ffe5e0",

    },
    {
        bgcol:"#e8f5fc",
        hbgcol:"#cfe5fa",
        tcol:"#245491",
        htcol:"#001d51",
        brcol:"#1C468E",
        tagf:"#012912",
        tagb:"#def6e8",
    },
    
]

const Event = ({event}) => {
    const tr=event.featuredEvent?1:0;
  return (
    <a href={event.link} target="_blank">
    <div className='event relative'>
        <img src={event.eventImg.url} alt="eventImg" className='eventImg' />
        {tr?<span className='catBox absolute'>Upcoming</span>:<span className='catBox absolute'>Past</span> }
        <div className='eventInfo'>
            <span className='eventHead'>{event.eventName}</span>

            <div className='eventDTV '>
                <span className='eventDate'>{event.date}</span>
                <span className='sep sep1'>|</span>
                <span className='eventTime'>{event.time}</span>
                <span className='sep sep2'>|</span>
                <span className='eventVenue'>{event.venue}</span>
            </div>
            <div className='eventDesc'>{event.eventDesc}</div>
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
                    // background: rgb(2,0,36);
                    // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(246,244,237,1) 0%, rgba(203,201,187,1) 100%);
                    width:350px;
                    color:${colors[tr].tcol};
                    // color:#313131;
                    transition: all .2s ease-out;
                    align-items:center;
                    z-index:0;
                }
                .event:hover{
                    color:${colors[tr].htcol};
                    background-color:${colors[tr].hbgcol};
                    border:2px solid ${colors[tr].brcol};
                }
                .event:hover .eventImg{
                    border:2px solid ${colors[tr].brcol};
                    // height:auto;
                }
                .eventImg{
                    border:2px solid #b0b0b0;
                    // transition:height .5s ease-out;
                    height:270px;
                    width:330px;
                    object-fit:cover;
                    border-radius:18px;
                    transition: all .2s ease-out;
                }
                .eventInfo{
                    padding:4px 8px 0px 8px;
                    height:205px;

                }
                .eventDTV{
                    margin-bottom:3px
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
                .eventDesc{
                    max-height:216px;
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }
                .catBox{
                    margin-left: 15px;
                    color:${colors[tr].tagf};
                    background-color:${colors[tr].tagb};
                    padding:1px 7px;
                    border-bottom-left-radius:5px;
                    border-top-right-radius:16px;
                    right:11.5px;
                    top:11px;
                    font-size:18px;
                }
                @media screen and (min-width:750px) and (max-width:920px){
                    .event{
                        flex-direction:row;
                        height:290px;
                        width: fit-content;
                    }
                    .eventImg{
                        height:265px;
                        width:265px;
                    }
                    .eventDesc{
                        height:170px;
                    }
                    .eventInfo{
                        padding:0px 0px 0px 12px;
                    }
                    .catBox{
                        border-radius: 6px;
                        border:2px solid #b0b0b0;
                    }
                }
                @media screen and (max-width:380px){
                    .event{
                        width:335px;
                    }
                    .eventImg{
                        width:312px;
                    }
                    .eventInfo{
                        height:230px;
                    }
                }
                
            `}
        </style>
    </div>
    </a>
  )
}

export default Event