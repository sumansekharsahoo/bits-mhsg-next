import React from 'react'
import HelplineCard from '@/components/HelplineCard'
const resources = () => {
   const helpline=[
    {
      Desc:"TeleMANAS Govt(24x7)",
      Phone:"Toll Free: 14416",
      Link: "https://telemanas.mohfw.gov.in/#/home"
    },
    {
      Desc:"Mpower",
      Phone:"Mental Health Consulting Services",
      Link: "https://mpowerminds.com/seekhelp"
    },
    {
      Desc:"iCALL Helpline (Tata Institute of Social Sciences)",
      Phone:"Call: 9152987821 (10AM-8PM, Mon-Sat)",
      Link: "https://icallhelpline.org/"
    },
    {
      Desc:"YourDOST",
      Phone:"Chat anonymously with YourDOST Experts (24x7)",
      Link: "https://yourdost.com/"
    }
  ]
  return (
    <div className='resources'>
      <div className='mainCont'>
        <div className='Head text-5xl my-2'>Resources</div>
        <div className='emergencyCont flex flex-col'>
          <div className='emergencyHead'>Emergency Helpline</div>
          <div className='contactsCont'>
            <HelplineCard helpObj={helpline[0]} imgObj="/helpline/HealthMinistry.png"/>
            <HelplineCard helpObj={helpline[1]} imgObj="/helpline/Mpower.png"/>
            <HelplineCard helpObj={helpline[2]} imgObj="/helpline/TISS.png"/>
            <HelplineCard helpObj={helpline[3]} imgObj="/helpline/YourDost.png"/>
          </div>
        </div>
        <div className='mentalHealthConditions'>
          <div className='mHCondHead'>Learn about mental health conditions</div>
          <div className='mHCondGrid'>
            <a href="https://www.who.int/news-room/fact-sheets/detail/depression" target="_blank">
              <div className='mHCondItems'>Depression</div>
            </a>
            <div className='mHCondItems'>Postpartum Depression</div>
            <div className='mHCondItems'>Anxiety</div>
            <div className='mHCondItems'>ADHD</div>
            <div className='mHCondItems'>Bipolar Disorder</div>
            <div className='mHCondItems'>Addiction</div>
            <div className='mHCondItems'>Eating Disorders</div>
            <div className='mHCondItems'>Psychosis & Schizophrenia</div>
            <div className='mHCondItems'>Self Harm</div>
            <div className='mHCondItems'>Suicidal Thoughts</div>
            <div className='mHCondItems'>Trauma & PTSD</div>
          </div>
        </div>
        <div className='testMusicCont flex'>
          <a href="https://www.clinical-partners.co.uk/online-tests" target="_blank">
            <div className='MHTest'>
              Mental Health Assessment
            </div>
          </a>
          <a href="https://open.spotify.com/playlist/3dP0ps6fqkutNUe2D5ODu4?si=ZywqwLMCRbaqqd6GEGwQtw&nd=1" target="_blank">
            <div className='Music'>
              Music & Podcasts
            </div>
          </a>
        </div>
        
      </div>
      <style jsx>
        {`
          .resources{
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .mainCont{
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color:white;
            margin: 0px 60px 60px 60px;
            padding: 0px 40px 40px 40px;
            border-radius: 12px;
          }
          .mentalHealthConditions{
            margin:20px 0px;
            background-color:#e7f2fb;
            // background-color:#EDE4FF;
            padding:20px 45px 45px 45px;
            display:flex;
            flex-direction:column;
            border-radius:18px;
            // border:2px solid #3528c8;
            border:2px solid #b0b0b0;
          }
          .mHCondHead{
            font-size:32px;
            font-weight:700;
            // color:#6e0298;  
            color:#3579a3;  
          }
          .mHCondGrid{
            margin-top:15px;
            display:grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            gap:20px 20px;
          }
          .mHCondItems{
            font-size:18px;
            color:white;
            padding:15px 15px;
            background-color:#A076F9;
            // background-color:#9384D1;
            background-color:#3579a3;
            text-align: center;
            border-radius:12px;
          }
          .mHCondItems:hover{
            background-color:#1657a1;
          }
          .emergencyCont{
            background-color:#fbe7df;
            border-radius:18px;
            padding:20px 45px 45px 45px;
            border:2px solid #b0b0b0;
            margin:10px 0px 20px 0px;
          }
          .emergencyHead{
            font-size:32px;
            font-weight:700;
            color:#ca5040;
          
          }
          .contactsCont{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:30px 30px; 
            margin-top:15px;
          }
          .testMusicCont{
            font-size:30px;
            font-weight:700;
            margin:20px 0px
          }
          .MHTest{
            background-color:#fcf1db;
            padding:10px 20px;
            border-radius:12px;
            margin-right:20px;
            color:#f08b13;
            border:2px solid #b0b0b0;
          }
          .Music{
            background-color:#f6ebf7;
            padding:10px 20px;
            border-radius:12px;
            color:#c741b4;
            border:2px solid #b0b0b0;
          }
        `}
      </style>
    </div>
  )
}

export default resources