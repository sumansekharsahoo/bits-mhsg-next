import React from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn} from "react-icons/fa";

const FooterPrimary = () => {
  const [quote, setQuote] = useState('Quote');
  const [author, setAuthor] = useState('Author');
  useEffect(() => {
    fetch('/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].q) {
          setQuote(data[0].q);
        }
        if(data && data[0] && data[0].a){
          setAuthor(data[0].a);
        }
      })
      .catch((error) => {
        console.error('Error fetching quote', error);
      });
  }, []);

  return (
    <div className='footer relative bg-[#141414] text-white mt-8'>
      <div className='quoteMainCont'>
        <div className='quoteHead Head'>Quote of the Day</div>
        <div className='quoteCont'>
          {/* <div className='quote'><span>"</span>Procrastination is one of the most common and deadliest of diseases and its toll on success and happiness is heavy.<span>"</span></div> */}
          <div className='quote'><span>&ldquo;</span>{quote}<span>&rdquo;</span></div>
          {/* <div className='quoAuthor'><span>~</span>Tony Robbins</div> */}
          <div className='quoAuthor'><span>~</span>{author}</div>
        </div>
      </div>
      <div className='linksLogoContainer'>
        <div className='linksContainer w-[350px] ml-[30px] xl:mr-[40px]'>
            <div className='quickLinks'>
                <div className='text-[24px] sm:text-[26px] text-[#9ce3d7] mb-[4px]'>Quick Links</div>
                <ul>
                    <li className='mb-[3px] hover:text-[#e1f588]'><a href="/userdata" className='quickLinkTxt'>Data & User contols</a></li>
                    <li className='mb-[3px] hover:text-[#e1f588]'><a href="https://github.com/sumansekharsahoo/bits-mhsg-next/issues" className='quickLinkTxt'>Report bugs</a></li>
                    <li className='hover:text-[#e1f588]'><a href="/credits" className='quickLinkTxt'>Credits & Attributions</a></li>
                </ul>
            </div>
            <div className='followLinks'>
                <div className='text-[24px] sm:text-[26px] text-[#9ce3d7] mb-[4px]'>Social</div>
                <ul>
                    <li className='mb-[6px]'><a href="https://www.facebook.com/groups/BITS.MHSG" target="_blank"><span className='socSpan'><span className='socIcon'><FaFacebookF/></span>Facebook</span></a></li>
                    <li className='mb-[6px]'><a href="https://instagram.com/bits.mhsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" ><span className='socSpan'><span className='socIcon'><FaInstagram/></span>Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/company/bits-mental-health-support-group/" target="_blank"><span className='socSpan'><span className='socIcon'><FaLinkedinIn/></span>LinkedIn</span></a></li>
                </ul>
            </div>
        </div>
        <div className='logoContainer'>
          <a href="/" target="_blank"><Image src="/official/MHSG_LongNav.webp" alt="MHSG_Long" height={110} width={110} loading='lazy'/></a>
          <a href="mailto:mhsg@hyderabad.bits-pilani.ac.in" target="_blank">mhsg@hyderabad.bits-pilani.ac.in</a>
        </div>
      </div>

      <style jsx>{`
        .footer{
          display:flex;
          padding:30px 60px 30px 40px;
          border-top-left-radius:15px;
          border-top-right-radius:15px;
          justify-content:space-between;
        }
    
        .quoteMainCont{
          width:650px;
          display:flex;
          flex-direction:column;
          align-items:center;
          border-radius:12px;
        }
        .Head{
          font-size:28px;
        }
        .quoteCont{
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
        }
        .quote{
          font-size:19px;
        }
        .quoAuthor{
          font-size:19px;
          font-style:italic;
        }
        .contactLogo{
          align-items:center;
        }
        .socSpan{
          display:flex;
          align-items:center;
          font-size:20px;
        }
        .socIcon{
          font-size:17px;
          padding:6px;
          margin-right:5px;
          border-radius:40px;
          background-color:#4da994;
        }
        .linksContainer{
            display:flex;
            justify-content:space-between;
        }
        .linksLogoContainer{
            display:flex;
        }
        .logoContainer{
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .quickLinkTxt{
          font-size:20px;
        }
        @media screen and (max-width:1420px){
          .quoteMainCont{
            width:600px;
          }
          .footer{
            padding:30px 40px 30px 40px;
          }
        }
        @media screen and (max-width:1360px){
          .quoteMainCont{
            width:580px;
          }
          .footer{
            padding:30px 30px 30px 20px;
          }
          .linksContainer{
            margin:0px 20px 0px 20px
          }
          .quickLinkTxt{
            font-size:18px;
          }
          .socSpan{
            font-size:18px;
          }
          .linksContainer{
            width:300px;
          }
        }
        @media screen and (max-width:1200px){
          .footer{
            flex-direction:column;
            padding:20px 80px 20px 80px;
            align-items:center;
          }
          .quoteMainCont{
            width:auto;
            margin-bottom: 24px; 
          }
          .linksLogoContainer{
            width:75vw;
            justify-content:space-between;
          }
          .linksContainer{
            width:340px;
          }
        }
        @media screen and (max-width:835px){
          .linksContainer{
            width:310px;
          }
          .linksLogoContainer{
            width:85vw;
          }
        }
        @media screen and (max-width:695px){
          .footer{
            padding:20px 30px 20px 20px;
          }
          .contactLogo{
            width:auto;
            flex-direction:column;
          }
          .quote{
            font-size:17px;
          }
          .quoAuthor{
            font-size:16px;
            font-style:italic;
          }
          .Head{
            font-size:23px;
          }
          .linksLogoContainer{
            width:90vw;
          }
          .linksLogoContainer{
            flex-direction:column;
            align-items:center;
          }
          .linksContainer{
            width:380px;
            margin-bottom:15px;
          }
        }
        @media screen and (max-width:450px){
          .linksContainer{
            width:85vw;
          }
          .quickLinkTxt{
            font-size:16px;
          }
          .socSpan{
            font-size:16px;
          }

        }
      `}</style>
    </div>
  )
}

export default FooterPrimary