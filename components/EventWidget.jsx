import React from 'react'

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

const EventWidget = (props) => {
  let tr;
  const d = new Date(props.enddate);
  const now= new Date();
  if(now>d){
    tr=0;
  }else{
    tr=1;
  }
  // console.log(props.enddate)
  return (
    <a href={props.link} target="_blank" className='flex flex-col mainCont'>
      <img src={props.img} alt="imgNotRendered" className='img' />
      <div className='ptitle  px-[4px]'>
        {props.title}
      </div>
      <div className='det flex items-center justify-between px-[4px]'>
        <span className='date'>{props.date}</span>
        {tr?<span className='catBox catBox1'>Upcoming</span>:<span className='catBox catBox1'>Past</span> }
      </div>
      <style jsx>
        { `
          .mainCont{
            width:300px;
            background-color:#e8f5fc;
            border-radius:10px; 
            padding:7px;
            border:2px solid #b0b0b0;
            transition: all .2s ease-out;
            color:#245491;
          }
          .img{
            height:250px;
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
          .catBox{
              color:${tag[tr].tagf};
              background-color:${tag[tr].tagb};
              padding:1px 6px;
              border-radius:6px;
              border:1px solid #b0b0b0;
              font-size:15px;
          }

        `}
      </style>
    </a>
  )
}

export default EventWidget