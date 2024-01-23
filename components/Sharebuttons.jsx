import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton
} from 'react-share';

const Sharebuttons = ({ title, slug }) => {
  const [display,setDisplay]= useState("none");
  const emailsub= `Post by BITS MHSG: ${title}`
  const url= "https://www.bitsmhsg.me/post/"+slug
  function clipbcopy(){
    navigator.clipboard.writeText(url);
    setDisplay("inline");
  }
  
  return (
    <div className='sharebtns-cont shadow-md'>
      <div className='sharebtns'>
      <span className='sh-text'>Share: </span>

      <FacebookShareButton url={url} className='socIcons'>
        <Image src="/icons/facebook_r.png" alt="fb" height={36} width={36} className='socIcons'/>
      </FacebookShareButton>
      
      <WhatsappShareButton url={url} title={emailsub}>
        <Image src="/icons/whatsapp.png" alt="lkn" height={36} width={36} className='socIcons'/>
      </WhatsappShareButton>

      <LinkedinShareButton url={url}>
        <Image src="/icons/linkedin_r.png" alt="lkn" height={36} width={36} className='socIcons'/>
      </LinkedinShareButton>

      <EmailShareButton subject = {emailsub} body="Check this out: " url={url}>
        <Image src="/icons/email_r.png" alt="lkn" height={36} width={36} className='socIcons'/>
      </EmailShareButton>

      <button className='copylink' onClick={clipbcopy}>
        <Image src="/icons/link.png" alt="lkn" height={36} width={36} className='socIcons'/>
      </button>
      </div>
      <span className='copy-msg' style={{ display }}>Copied!</span>
      <style jsx>{`
        .sharebtns{
          background-color: #FFFFFF;
          padding:15px;
          display: flex;
          align-items:center;
          width:330px;
          justify-content:space-between;
          border-radius:0.5rem; 
        } 
        .sh-text{
          font-size: 25px;
          // font-family: 'IBM Plex Sans', sans-serif;
          font-weight:600;
        }
        .copy-msg{
          margin-right:2px;
          display:none;
          position:absolute;
          top:50px;
          right:10px;
          font-size:12px;
        }
        .sharebtns-cont{
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          position:relative;
        }
      `}</style>
    </div>
  )
}

export default Sharebuttons