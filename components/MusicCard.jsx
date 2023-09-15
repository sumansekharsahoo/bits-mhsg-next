import React from 'react'
const MusicCard = (props) => {
  return (
    <a href={props.url} target="_blank" className='musicCardCont flex flex-col items-center'>
        <img src={props.img} alt="playlistImg" className='musicImg'/>
        <div className='title'>
            {props.title}
        </div>
        <img src={props.tag} alt="*" className='playerIcon'/>
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
                width:100%;  
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
            `}
        </style>
    </a>
  )
}

export default MusicCard