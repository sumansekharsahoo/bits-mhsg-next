import React from 'react'
import {useState, useEffect} from 'react'



const Footer = () => {
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
      <div className='flex contactLogo'>
        <div className='contactMainCont'>
            <div className='contactHead Head'>Connect</div>
            <div className='social'>
              <a href="mailto:mhsg@hyderabad.bits-pilani.ac.in" target="_blank"><img src="/icons/email.png" alt="Email" className='socIcons mail'/></a>
              <a href="https://www.facebook.com/groups/BITS.MHSG" target="_blank"><img src="/icons/facebook.png" alt="Facebook" className='socIcons'/></a>
              <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><img src="/icons/instagram.png" alt="Instagram" className='socIcons'/></a>
              <a href="https://www.linkedin.com/company/bits-mental-health-support-group/" target="_blank"><img src="/icons/linkedin.png" alt="Linkedin" className='socIcons'/></a>
            </div>
        </div>
        <div className='logoCont'>
          <a href="/" target="_blank"><img src="/official/MHSG_Long.png" alt="MHSG_Long" className='MHSGIcon'/></a>
          <a href="https://www.bits-pilani.ac.in/hyderabad/" target="_blank"><img src="/official/BITS_Pilani.png" alt="BITS" className='BITSIcon'/></a>
        </div>
      </div>
      <a href="/credits" className='credits'>Credits & Attributions</a>

      <style jsx>{`
        .footer{
          display:flex;
          padding:30px 60px 20px 20px;
          border-top-left-radius:15px;
          border-top-right-radius:15px;
          justify-content:space-around;
        }
        .socIcons{
          height:30px;
        }
        .mail{
          height:36px;
        }
        .BITSIcon{
          height:100px
        }
        .MHSGIcon{
          height:140px;
        }
        .quoteMainCont{
          width:680px;
          display:flex;
          flex-direction:column;
          align-items:center;
          // background-color:#e7f7f8;
          // justify-content:center;
          // color:black;
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
        .contactMainCont{
          width:250px;
          display:flex;
          flex-direction:column;
          align-items:center;
          // background-color:blue;
          // justify-content:center;
          margin-left:auto;
        }
        .social{
          width:156px;
          justify-content:space-between;
          display:flex;
          align-items:center;
          margin-top:8px;
        }
        .logoCont{
          display:flex;
          align-items:center;
          width:fit-content;
        }
        .credits{
          position:absolute;
          bottom:10px;
          left:1%;
          color:white;
          font-size:12px;
        }
        .credits:hover{
          color:#caf095;
        }
        @media screen and (max-width:1200px){
          .footer{
            flex-direction:column;
            padding:20px 80px 20px 80px;
            align-items:center;
          }
          .quoteMainCont{
            width:auto;
          }
          .contactMainCont{
            width:auto;
            margin:10px 0px;
          }
          .contactLogo{
            width:60vw;
            justify-content:space-between;
            margin-top:10px;
          }
        }
        @media screen and (max-width:680px){
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
          .credits{
            left:36%
          }
        }
      `}</style>
    </div>
  )
}

export default Footer