import React from 'react'

const EventWidget = (props) => {
  return (
    <a href={props.link} className='flex flex-col mainCont'>
      <img src={props.img} alt="imgNotRendered" className='img' />
      <div className='ptitle'>
        {props.title}
      </div>
      <div className='det flex justify-between'>
        <span className='date'>{props.date}</span>
        <span className='date'>{props.loc}</span>
      </div>
      <style jsx>
        { `
          .mainCont{
            width:300px;
            background-color:#e8f5fc;
            border-radius:10px; 
            padding:12px;
            border:2px solid #b0b0b0;
            transition: all .2s ease-out;
            color:#245491;
          }
          .img{
            height:240px;
            object-fit:cover;
            border-radius:10px;
            border:2px solid #b0b0b0;
            transition: all .2s ease-out;
          }
          .ptitle{
            // height:30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size:20px; 
            font-weight:500;
            text-align:center;
          }
          .mainCont:hover{
            color:#001d51;
            background-color:#cfe5fa;
            border:2px solid #001d51;
          }
          .mainCont:hover .img{
            border:2px solid #001d51;
          }

          .det{
            margin-top:5px;
          }

        `}
      </style>
    </a>
  )
}

export default EventWidget