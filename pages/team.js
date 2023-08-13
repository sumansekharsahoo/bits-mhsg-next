import React from 'react'
import Profile from '@/components/Profile'
import Head from 'next/head'

const profiles=[
  {id:"1", profName:"Abhinav Srivastava", pos:"President", img:"/profile/Abhinav.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"2", profName:"Tanmay Agarwal", pos:"Secretary", img:"/profile/Tanmay.jpg", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"3", profName:"Shreya Singh", pos:"Treasurer", img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"4", profName:"Sruthi Manikonda", pos:"Design Lead", img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"5", profName:"Akhil Mohammad", pos:"Event Lead", img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"6", profName:"Simran Singh", pos:"Content Lead", img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"7", profName:"Suman Sekhar Sahoo", pos:"Webdev Lead", img:"/profile/Suman.png",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"8", profName:"Nakshatra Dhavale", pos:"Social Lead", img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
  {id:"9", profName:"Umang Lal", pos:"Ex-Officio", img:"/profile/Umang.png", iglink:"https://www.instagram.com/bits.mhsg/",linkedlink:"https://www.instagram.com/bits.mhsg/"},
]

const cols=[
  {bcol:"#d6e7a8", tcol:"#20400d"},
  {bcol:"#cfebd2", tcol:"#245491"},
  {bcol:"#EF6262", tcol:"black"},
  {bcol:"#fcf1db", tcol:"#f08b13"},
  {bcol:"#eef0fe", tcol:"#594df6"},
]

const team = () => {
  return (
    <div className='flex flex-col align-middle'>
        <Head>
            <title>Team</title>
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
            
            <Profile profName={profiles[0].profName} pos={profiles[0].pos} img={profiles[0].img} insta={profiles[0].iglink} linkin={profiles[0].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[1].profName} pos={profiles[1].pos} img={profiles[1].img} insta={profiles[1].iglink} linkin={profiles[1].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[2].profName} pos={profiles[2].pos} img={profiles[2].img} insta={profiles[2].iglink} linkin={profiles[2].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[6].profName} pos={profiles[6].pos} img={profiles[6].img} insta={profiles[6].iglink} linkin={profiles[6].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[4].profName} pos={profiles[4].pos} img={profiles[4].img} insta={profiles[4].iglink} linkin={profiles[4].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[3].profName} pos={profiles[3].pos} img={profiles[3].img} insta={profiles[3].iglink} linkin={profiles[3].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[5].profName} pos={profiles[5].pos} img={profiles[5].img} insta={profiles[5].iglink} linkin={profiles[5].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[7].profName} pos={profiles[7].pos} img={profiles[7].img} insta={profiles[7].iglink} linkin={profiles[7].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
            <Profile profName={profiles[8].profName} pos={profiles[8].pos} img={profiles[8].img} insta={profiles[8].iglink} linkin={profiles[8].linkedlink} bcol={cols[0].bcol} tcol={cols[0].tcol}/>
        </div>
        
    </div>
  )
}

export default team