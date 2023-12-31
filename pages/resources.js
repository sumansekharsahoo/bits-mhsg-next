import React from 'react'
import Head from 'next/head'
import HelplineCard from '@/components/HelplineCard'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';

const resources = () => {
   const helpline=[
    {
      Desc:"TeleMANAS Govt(24x7)",
      Phone:"Toll Free: 14416",
      Link: "https://telemanas.mohfw.gov.in/#/home"
    },
    {
      Desc:"Mpower",
      Phone:"Call: +91 70757 74107 (Campus Helpdesk)",
      Link: "https://mpowerminds.com/seekhelp"
    },
    {
      Desc:"iCALL Helpline (Tata Institute of Social Sciences)",
      Phone:"9152987821 (10AM-8PM,Mon-Sat)",
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
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
      </Head>
      <NextSeo 
        title='Resources' 
         openGraph={{
        type: 'website',
        url: 'https://bitsmhsg.vercel.app/resources',
        title: 'Resources',
        description: 'Your mental health matters. Checkout our resources page!',
        images: [
          {
            url: '/official/MHSG_Short.png',
            width: 1200,
            height: 630,
            alt: 'BITS MHSG',
          },
          {
            url: '/official/MHSG_Long.png',
            width: 1024,
            height: 512,
            alt: 'BITS MHSG',
          },
        ],
      }}
      />
      <SocialProfileJsonLd
      type="Organization"
      name="BITS MHSG"
      url="https://bitsmhsg.vercel.app/resources"
      sameAs={[
        'https://www.facebook.com/groups/BITS.MHSG/',
        'https://www.instagram.com/bits.mhsg/',
        'https://www.linkedin.com/company/bits-mental-health-support-group/',
      ]}
    />
      <div className='mainCont'>
        <div className='text-5xl my-2 Header'>Resources</div>
        <div className='emergencyCont flex flex-col'>
          <div className='emergencyHead Head'>#AskForHelp</div>
          <div className='contactsCont'>
            <HelplineCard helpObj={helpline[0]} imgObj="/helpline/HealthMinistry.png"/>
            <HelplineCard helpObj={helpline[1]} imgObj="/helpline/Mpower.png"/>
            <HelplineCard helpObj={helpline[2]} imgObj="/helpline/TISS.png"/>
            <HelplineCard helpObj={helpline[3]} imgObj="/helpline/YourDost.png"/>
          </div>
        </div>
        <div className='mentalHealthConditions'>
          <div className='mHCondHead Head'>Learn about mental health conditions</div>
          <div className='mHCondGrid'>
            <a href="https://www.who.int/news-room/fact-sheets/detail/depression" target="_blank">
              <div className='mHCondItems'>Depression</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617" target="_blank">
              <div className='mHCondItems'>Postpartum Depression</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" target="_blank">
              <div className='mHCondItems'>Anxiety</div>
            </a>
            <a href="https://www.healthline.com/health/adhd" target="_blank">
              <div className='mHCondItems'>ADHD</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955" target="_blank">
              <div className='mHCondItems'>Bipolar Disorder</div>
            </a>
            <a href="https://my.clevelandclinic.org/health/diseases/6407-addiction" target="_blank">
              <div className='mHCondItems'>Addiction</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/eating-disorders/symptoms-causes/syc-20353603" target="_blank">
              <div className='mHCondItems'>Eating Disorders</div>
            </a>
            <a href="https://my.clevelandclinic.org/health/diseases/12201-self-harm" target="_blank">
              <div className='mHCondItems'>Self Harm</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/suicide/symptoms-causes/syc-20378048" target="_blank">
              <div className='mHCondItems'>Suicidal Thoughts</div>
            </a>
            <a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" target="_blank">
              <div className='mHCondItems'>Trauma & PTSD</div>
            </a>
          </div>
        </div>
        <div className='testMusicCont flex'>
          <a href="https://www.clinical-partners.co.uk/online-tests" target="_blank"  className='MHTest commonMT'>
            <img src="/helpline/MHTest.png" alt="MHTest" className='MHTImg' />
            <div>
              Mental Health Assessment
            </div>
          </a>
          <a href="/music" className='Music commonMT'>
            <img src="/carousel/music.png" alt="Music" className='MusicImg' />
            <div>
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
            margin-top:10px;
          }
          .mainCont{
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color:white;
            margin: 0px 0px 20px 0px;
            padding: 0px 60px 40px 60px;
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
            padding:13px 10px;
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
            color:#ca5040;
          
          }
          .contactsCont{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:30px 30px; 
            margin-top:15px;
          }
          .testMusicCont{
            text-align:center;
            font-size:26px;
            font-weight:700;
            margin:20px 0px
          }
          .MHTest{
            background-color:#fcf4e1;
            margin-right:40px;
            color:#f08b13;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
          }
          .MHTest:hover{
            background-color:#fceac5;
          }
          .MHTImg{
            width:300px;
            margin-top:10px;
          }
          .Music{
            background-color:#dcfeec;
            color:#02b571;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
          }
          .Music:hover{
            background-color:#cdfae3;
          }
          .MusicImg{
            width:320px;
          }
          .commonMT{
            padding:13px;
            border-radius:12px;
            border:2px solid #b0b0b0;
          }
          .Head{
            font-size:36px;
            font-weight:700;
          }
           @media screen and (max-width:1220px){
            .mHCondGrid{
              grid-template-columns:1fr 1fr 1fr;
            }
            .contactsCont{
              gap:18px 18px;
            }
            .emergencyCont{
              padding:10px 20px 25px 20px;
            }
            .contactsCont{
              margin-top:5px;
            }

            .Head{
            font-size:32px;
            font-weight:700;
            }
           }
           @media screen and (max-width:1024px){
            .mentalHealthConditions{
              padding:10px 20px 25px 20px;
            }
            .mainCont{
              padding: 0px 20px 30px 20px;
            }
            .mHCondGrid{
              margin-top:5px;
              gap:15px 15px;
            }
            .MHTImg{
              width:280px;
            }
            .MusicImg{
              width:300px;
            }
            .testMusicCont{
              font-size:25px;
            }
           }
            @media screen and (max-width:810px){
              .contactsCont{
                gap:12px 12px;
              }
              .mHCondItems{
                font-size:15px;
              }
              .testMusicCont{
                font-size:24px;
              }
              .commonMT{
                padding:8px 15px;
              }
              .MHTest{
                margin-right:20px;
              }
            }
            @media screen and (max-width:715px){
              .resources{
                margin-top:5px;
              }
              .mHCondGrid{
                grid-template-columns:1fr 1fr;
                gap:10px 8px;
                margin-top:8px;
              }
              .contactsCont{
                grid-template-columns: 1fr;
                margin-top:10px;
                gap:10px 5px;
              }
              .Head{
                line-height: 1.2;
                font-size:25px;
              }
              .mHCondItems{
                padding:10px 8px;
                font-size:12px;
                border-radius:8px;
              }
              .testMusicCont{
                // flex-direction:column;
                align-items:center;
                font-size:20px;
              }
              .MHTest{
                // margin-bottom:25px;
                // margin-right:0px;
                font-size:20px;
              }
              .commonMT{
                padding:5px 12px; 
              }
              .mainCont{
                margin:0px 5px 60px 5px;
                padding:0px 8px 30px 8px;
              }
              .mentalHealthConditions{
                padding:10px 15px 25px 15px;
                margin:20px 0px 10px 0px;
              }
              .emergencyCont{
                padding:10px 15px 25px 15px;
                margin:10px 0px 10px 0px;
              }
              .Header{
                font-size:40px;
              }
              .MHTImg{
                width:90px;
              }
              .MusicImg{
                width:170px;
              }
            }
        `}
      </style>
    </div>
  )
}

export default resources