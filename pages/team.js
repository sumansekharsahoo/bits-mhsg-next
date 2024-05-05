import React from 'react'
import Profile from '@/components/Profile'
import Head from 'next/head'

const profiles=[
  {id:"1", profName:"Abhinav Srivastava", pos:"President", img:"/profile/Abhinav2.webp", iglink:"https://instagram.com/_abhinavsrivastavaaa?igshid=MjEwN2IyYWYwYw==",linkedlink:"https://in.linkedin.com/in/abhinav-srivastava-496524191", bcol:"#99fcd8"},
  {id:"2", profName:"Tanmay Agarwal", pos:"Secretary", img:"/profile/Tanmay.webp", iglink:"https://instagram.com/tanmay_ag_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",linkedlink:"https://www.linkedin.com/in/tanmay-ag",bcol:"#a6c0fa"},
  {id:"3", profName:"Shreya Singh", pos:"Treasurer", img:"/profile/Shreya2.webp", iglink:"https://instagram.com/shreya.singh31?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",linkedlink:"https://www.linkedin.com/in/shreya-singh-ss",bcol:"#f6c8e1"},
  {id:"4", profName:"Eshaa Aranggan", pos:"Event Lead", img:"/profile/Eshaa.webp", iglink:"https://www.instagram.com/eshaa_316?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",linkedlink:"https://www.linkedin.com/in/eshaa-a-096686261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", bcol:"#f9d8b3"},
  {id:"5", profName:"Sruthi Manikonda", pos:"Design Lead", img:"/profile/Sruthi.webp", iglink:"https://instagram.com/taking.the.hobbits.to.isengard?igshid=MjEwN2IyYWYwYw==",linkedlink:"https://in.linkedin.com/in/bala-gayatri-sruthi-manikonda-5a2819259",bcol:"#fce881"},
  {id:"6", profName:"Simran Singh", pos:"Content Lead", img:"/profile/Simran.webp", iglink:"https://instagram.com/simran_singh7047_?igshid=MjEwN2IyYWYwYw==",linkedlink:"https://www.linkedin.com/in/simran-singh-2b8b93288/", bcol:"#d1c5fa"},
  {id:"8", profName:"Nakshatra Dhavale", pos:"Social Lead", img:"/profile/Nakshatra.webp", iglink:"https://instagram.com/nakshatra189?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",linkedlink:"https://www.linkedin.com/in/nakshatra-dhavale-890118258",bcol:"#dcf18c"},
  {id:"7", profName:"Suman Sekhar Sahoo", pos:"Webdev Lead", img:"/profile/Suman.webp",linkedlink:"https://www.linkedin.com/in/suman-sekhar-sahoo-82621623b/", iglink:"https://instagram.com/sumansekhar.sahoo?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",bcol:"#ff6a6c"},
  {id:"9", profName:"Umang Lal", pos:"Ex-Officio", img:"/profile/Umang.webp", iglink:"https://instagram.com/_umang_lal?igshid=MjEwN2IyYWYwYw==",linkedlink:"https://www.linkedin.com/in/umang-lal-528374215",bcol:"#a7d7fb"},
  {id:"10", profName:"Tarun Garg", pos:"Founder & Mentor", img:"/profile/Tarun.webp", iglink:"https://instagram.com/bits.mhsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",linkedlink:"https://in.linkedin.com/in/tarungarg98",bcol:"#b9f2aa"},
]

// const cols=[
//   {bcol:"#99fcd8", tcol:"black"},
//   {bcol:"#a6c0fa", tcol:"#ef8f00"},
//   {bcol:"#f6c8e1", tcol:"#d29a00"},
//   {bcol:"#f9d8b3", tcol:"#f08b13"},
//   {bcol:"#fa8a7f", tcol:"#594df6"},
//   {bcol:"#fce881", tcol:"#594df6"},
//   {bcol:"#d1c5fa", tcol:"#594df6"},
//   {bcol:"#dcf18c", tcol:"#594df6"},
//   {bcol:"#a7d7fb", tcol:"#594df6"},
//   {bcol:"#b9f2aa", tcol:"#594df6"},
// ]

const team = () => {
  return (
    <div className='flex flex-col align-middle'>
        <Head>
            <title>Team</title>
            <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="google-site-verification" content="G0RCCzrZjR-vnGkjwF_GyzYQ2HFpTZismgmO82CEC1E" />
        </Head>
        <style jsx>{`
        
        .profCont{
          padding:40px;
          justify-items:center;
          gap:50px 30px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media screen and (min-width:1020px) and (max-width:1330px){
          .profCont{
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media screen and (min-width:660px) and (max-width:1020px){
          .profCont{
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width:680px){
          .profCont{
            grid-template-columns: 1fr;
          }
        }
        `
            
        }
        </style>
        <div className='text-center text-4xl sm:text-5xl team-headtxt mt-5'>Meet our team</div>
        <div className='profCont'>
            
            <Profile profName={profiles[0].profName} pos={profiles[0].pos} img={profiles[0].img} insta={profiles[0].iglink} linkin={profiles[0].linkedlink} bcol={profiles[0].bcol}/>
            <Profile profName={profiles[1].profName} pos={profiles[1].pos} img={profiles[1].img} insta={profiles[1].iglink} linkin={profiles[1].linkedlink} bcol={profiles[1].bcol}/>
            <Profile profName={profiles[2].profName} pos={profiles[2].pos} img={profiles[2].img} insta={profiles[2].iglink} linkin={profiles[2].linkedlink} bcol={profiles[2].bcol}/>
            <Profile profName={profiles[3].profName} pos={profiles[3].pos} img={profiles[3].img} insta={profiles[3].iglink} linkin={profiles[3].linkedlink} bcol={profiles[3].bcol}/>
            <Profile profName={profiles[4].profName} pos={profiles[4].pos} img={profiles[4].img} insta={profiles[4].iglink} linkin={profiles[4].linkedlink} bcol={profiles[4].bcol}/>
            <Profile profName={profiles[5].profName} pos={profiles[5].pos} img={profiles[5].img} insta={profiles[5].iglink} linkin={profiles[5].linkedlink} bcol={profiles[5].bcol}/>
            <Profile profName={profiles[6].profName} pos={profiles[6].pos} img={profiles[6].img} insta={profiles[6].iglink} linkin={profiles[6].linkedlink} bcol={profiles[6].bcol}/>
            <Profile profName={profiles[7].profName} pos={profiles[7].pos} img={profiles[7].img} insta={profiles[7].iglink} linkin={profiles[7].linkedlink} bcol={profiles[7].bcol}/>
            <Profile profName={profiles[8].profName} pos={profiles[8].pos} img={profiles[8].img} insta={profiles[8].iglink} linkin={profiles[8].linkedlink} bcol={profiles[8].bcol}/>
            <Profile profName={profiles[9].profName} pos={profiles[9].pos} img={profiles[9].img} insta={profiles[9].iglink} linkin={profiles[9].linkedlink} bcol={profiles[9].bcol}/>
        </div>
        
    </div>
  )
}

export default team