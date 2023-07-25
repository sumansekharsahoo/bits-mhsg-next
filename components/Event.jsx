import React from 'react'
import Image from 'next/image'
const Event = (props) => {
  return (
    <a href="https://www.instagram.com/bits.mhsg/" target="_blank">


    <div className='event'>
        <img src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fw_800%2Fv1680114825%2Foctzymzrrz68ez7qvk4i.jpg" alt="eventImg" className='eventImg' />
        <div className='eventInfo'>
            <div className='eventHead'>{props.Head}</div>
            <div className='eventDTV '>
                <span className='eventDate'>Oct 23,2023</span>
                <span className='sep sep1'>|</span>
                <span className='eventTime'>16:00 PM</span>
                <span className='sep sep2'>|</span>
                <span className='eventVenue'>F102</span>
            </div>
            <div className='eventDesc'>{props.Desc}</div>
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
                    width:350px;
                    color:#245491;
                    transition: all .3s ease-out;
                }
                .event:hover{
                    color:#001d51;
                    background-color:#d2dae8;
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
                    transition: all .3s ease-out;
                }
                .eventInfo{
                    padding:4px 8px 0px 8px;
                    // max-height:310px;

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