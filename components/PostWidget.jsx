import React from 'react'

const PostWidget = (props) => {
  return (
    <a href={`/post/${props.link}`} className='flex flex-col mainCont'>
      <img src={props.img} alt="imgNotRendered" className='img' loading='lazy'/>
      <div className='ptitle px-[5px]'>
        {props.title}
      </div>
      <div className='det flex justify-between px-[5px]'>
        <span className='author'>{props.auth}</span>
        <span className='date'>{props.date}</span>
      </div>
      <style jsx>
        { `
          .mainCont{
            width:300px;
            background-color:#fff7d9;
            border-radius:10px; 
            padding:8px;
            border:2px solid #b0b0b0;
            transition: all .2s ease-out;
            color:#7e4c01;
          }
          .img{
            height:215px;
            object-fit:cover;
            border-radius:10px;
            border:2px solid #b0b0b0;
            transition: all .2s ease-out;
          }
          .ptitle{
            font-size:20px; 
            font-weight:500;
            height:60px;
            overflow:hidden;
            text-overflow: ellipsis;
          }
          .mainCont:hover{
            background-color:#ffefba;
            border:2px solid #905700;
          }
          .mainCont:hover .img{
            border:2px solid #905700;
          }
          .mainCont:hover .ptitle{
            text-decoration:underline;
          }

          .det{
            margin-top:5px;
          }
          @media only screen and (max-width: 685px){
            .ptitle{
              height:auto;
            }
          }

        `}
      </style>
    </a>
  )
}

export default PostWidget