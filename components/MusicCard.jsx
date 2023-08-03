import React from 'react'

const MusicCard = (props) => {
  return (
    <a href={props.url} target="_blank" className='musicCardCont flex flex-col items-center'>
        <img src={props.img} alt="playlistImg" className='musicImg'/>
        <div className='title'>{props.title}</div>
        <style jsx>
            {`
            .musicCardCont{
                width:250px;
                border-radius:8px;
                background-color: ${props.bgcol};
                color:${props.fcol};
                border:2px solid #b0b0b0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding:12px 12px 10px 12px;
                transition: all 0.15s ease-out;
            }
            .musicCardCont:hover{
                box-shadow:0px 1px 10px 2px #c2c2c2; 
            }
            .musicImg{
                object-fit:cover;
            }
            .title{
                font-size:18px;  
            }
            @media screen and (max-width:1050px){
                .musicCardCont{
                    width:280px;
                }
                .title{
                    font-size:20px;  
                }
            }
            `}
        </style>
    </a>
  )
}

export default MusicCard