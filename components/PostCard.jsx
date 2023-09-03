import React from 'react'
import moment from 'moment/moment';
const PostCard = ({post}) => {
  // console.log(post)
  
  const bgcolor="#d9f3ce";
  const bgcolor2="#cbecf9";
  const bgcolor3="#fff7d9";
  const bgcolor5="#fcf6e1";
  const bgcolor4="#F6EDDB";
  const tcolor="#16250d";
  const tcolor2="#001d51";
  const tcolor3="#4a3102";
  const tcolor4="#4F3500";
  return (
    <a href={`/post/${post.slug}`} className='postcard flex flex-col'>
        {/* <img src='https://img.freepik.com/free-vector/high-self-esteem-illustration-with-woman-leaves_23-2148723709.jpg?w=740&t=st=1690047410~exp=1690048010~hmac=effb7c17dc55d36ad45e6d7c20707c3d60a05b84092f6c153916fa0c3e752f60' alt='sdc' className='postPic' /> */}
        <img src={post.featuredImage.url} loading='lazy' alt={post.title} className='postPic' />
        <div className='expectPic'>

          <div className='fixedCont'>
            <div className='postHead'>
              {post.title}
            </div>
            <div className='postDesc'>
              {post.excerpt}
            </div>
          </div>
          <div className='authDate'>
            <div className='author'>
                <img src={post.author.photo.url} alt="MHSG" height="40px" width="40px" className='rounded-full authPic'/>
                <p className='authName'>{post.author.name}</p>
            </div>
            <div className='date'>
                <p>{moment(post.date).format('MMM DD, YYYY')}</p>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .postcard{
            background-color: ${bgcolor3};
            border:2px solid #b0b0b0;
            width:360px;
            height:530px;
            padding:11px;
            border-radius:18px;
            // margin:20px;
            color:#7e4c01;
            //font-family: 'Roboto', sans-serif;
            transition: all .3s ease-out;
            cursor:pointer;
          }
          .postcard:hover{
            color:${tcolor4};
            border:2px solid #905700;
            background-color:#f5e1bb;
            background-color:#F4E4C4;
            background-color:#ffefba;
            // box-shadow: 1px 1px 10px 2px #aaaaaa ;
          }
          
          .postcard:hover .postPic{
            border:2px solid #905700;
          }

          .postPic{
            object-fit:cover;
            border:2px solid #b0b0b0;
            border-radius:18px;
            height:45%;
            transition: all .3s ease-out
          }
          .postHead{
            max-height:65px;
            margin:10px 0px;
            padding:0px 8px;
            font-size:23px;
            line-height: 1.4;
            font-weight:500;
            overflow: hidden;
            text-overflow: ellipsis; 
            transition: all .3s ease-out
          }
          .postcard:hover .postHead{
            text-decoration:underline;
          }
          .postDesc{
            height:143px;
            padding:0px 8px;
            overflow: hidden;
            text-overflow: ellipsis; 
          }
          .fixedCont{
            height:220px;
          }
          .author{
            display: flex;
            align-items:center;
            
          }
          .authPic{
            margin-right:10px
          }
          .authName{
            font-size:16px;
          }
          .authDate{
            display: flex;
            align-items:center;
            justify-content:space-between;
            padding:0px 10px 0px 5px;
            margin-top:8px;
          }
          @media only screen and (max-width: 600px){
            .postcard{
              margin:0px 10px; 
            }
          }
          @media only screen and (max-width: 396px){
            .postcard{
              margin:0px 5px; 
              width:344px;
            }
          }
          @media only screen and (min-width:650px) and (max-width: 1024px){
            .postcard{
              display:flex;
              flex-direction: row;
              width:auto;
              height:260px;
              margin:0px 25px
            }
            .postPic{
              width:236px;
              height:236px;
              object-fit:cover;
            }
            .postHead{
              padding: 0px 15px;
              margin:4px 0px;
            }
            .postDesc{
              padding: 0px 15px;
              height:120px
            }
            .fixedCont{
            height:185px;
            }
            .authDate{
              margin-top:8px;
              padding:0px 15px 0px 15px 
            }
          }
          `}
          
        </style>
    </a>
  )
}

export default PostCard