import React from 'react'
import Image from 'next/image'
import moment from 'moment'

const Event = ({event}) => {
  return (
    <a href={event.link} target="_blank">
    <div className='event'>
        <img src={event.eventImg.url} alt="eventImg" className='eventImg' />
        <div className='eventInfo'>
            <div className='eventHead'>{event.eventName}</div>
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
                    background-color:#eaeef4;
                    background-color:#e8f5fc;
                    width:350px;
                    color:#245491;
                    transition: all .2s ease-out;
                }
                .event:hover{
                    color:#015687;
                    color:#001d51;
                    background-color:#d2dae8;
                    background-color:#cfe5fa;
                    border:2px solid #001d51;
                    border:2px solid #1C468E;
                }
                .event:hover .eventImg{
                    border:2px solid #1C468E;
                }
                .eventImg{
                    border:2px solid #b0b0b0;
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
                }
                @media screen and (max-width:380px){
                    .event{
                        width:335px;
                    }
                    .eventImg{
                        width:312px;
                    }
                }
                
            `}
        </style>
    </div>
    </a>
  )
}

export default Event