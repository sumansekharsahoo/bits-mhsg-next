import React from 'react'
import Head from 'next/head'
import HelplineCard from '@/components/HelplineCard'
import { NextSeo } from 'next-seo'
import { SocialProfileJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import {db} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getDocs, collection, query, where, addDoc,Timestamp, orderBy} from "firebase/firestore"
import {auth,googleProvider} from "../config/firebase"
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const resources = () => {
  const [newConfess, setNewConfess]= useState("")
  const [username, setUsername]=useState("");
  const [userid, setUserId]=useState("");
  const [selectedOption, setSelectedOption] = useState("Male")  
  const [postOption, setPostOption] = useState("Student")  
  const [profOption, setProfOption] = useState("profNo")  
  const [futOption, setFutOption] = useState("futNo")  

  const commentConfess= collection(db, "confess")

  useEffect(()=>{
    auth.onAuthStateChanged(
      async(user)=>{
        if(user){
          let username= user.displayName;
          const uid = user.uid;
          setUsername(username);
          setUserId(uid);
        }
        else{
          setUsername("");
        }
      }
    )
  },[]);

  function onValueChange(event){
        setSelectedOption(event.target.value)
    }
  function onPostChange(event){
        setPostOption(event.target.value)
    }
  function onProfChange(event){
        setProfOption(event.target.value)
    }
  function onFutChange(event){
        setFutOption(event.target.value)
    }

    const submitConfess= async()=>{
    const auth= getAuth();
    const user= auth.currentUser;
    if(user!==null){
      const displayName= user.displayName;
      const email = user.email;
      const cur_timestamp=Timestamp.fromDate(new Date())
      try{
        await addDoc(commentConfess, {txt: newConfess, name: displayName, timestamp:cur_timestamp, uid: userid, mail:email, resolved:false})
        toast.info("Submitted",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      }catch(err){
        console.error(err);
      }
      setNewConfess('');
    }
    else{
      toast.error("Sign In to write!",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  }

  const clearTextArea=()=>{
    setNewConfess('');
  }

  const signIn = async () => {
      try {
      await signInWithPopup(auth, googleProvider);
      setLoginStatus(true);
      } catch (err) {
      console.error(err);
      }
  };

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
        url: 'https://www.bitsmhsg.me/resources',
        title: 'Resources',
        description: 'Your mental health matters. Checkout our resources page!',
        images: [
          {
            url: '/official/MHSG_OG.png',
            width: 1200,
            height: 630,
            alt: 'BITS MHSG',
          },
          {
            url: '/official/MHSG_Long.webp',
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
      url="https://www.bitsmhsg.me/resources"
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
            <HelplineCard helpObj={helpline[0]} imgObj="/helpline/HealthMinistry.webp"/>
            <HelplineCard helpObj={helpline[1]} imgObj="/helpline/Mpower.png"/>
            <HelplineCard helpObj={helpline[2]} imgObj="/helpline/TISS.webp"/>
            <HelplineCard helpObj={helpline[3]} imgObj="/helpline/YourDost.png"/>
          </div>
        </div>
        <div className='seekHelp flex flex-col'>
          <div className='seekHelpHead Head'>Reach Out for Support</div>
          <div className='seekHelpDesc sm:mb-[15px] mb-[10px]'>Welcome to our Support and Guidance Inquiry Form. We are here to provide a safe space for you to express your thoughts, feelings, and questions about your mental health. If you seek support, have specific queries, or just need someone to talk to, please share your concerns below. Our team of mental health first aiders is committed to offering assistance and guidance to help you on your journey towards mental well-being. Remember, you are not alone, and we are here for you.</div>
          {/* <div className='wmatch mb-[10px] mt-[5px]'>
            <h1 className=' text-green-900 text-[16px] sm:text-[23px] mb-[2px]'>Help us solve your queries and problems by answering the following:</h1>
            <div>
              <h1 className='txtpts'>1. You are (Student /Alumni)</h1>
              <h1 className='txtpts'>2. Your Gender (Male / Female / Other)</h1>
              <h1 className='txtpts'>3. Have you ever opted for professional help? (Yes/No) </h1>
              <h1 className='txtpts'>4. Are you willing to seek professional help in the future? (Yes/No)</h1>
              <h1 className='txtpts'>5. Mention your query/problem</h1>
            </div>
          </div> */}
        {/* <div className='wmatch mt-[10px]'>
          <h1 className='mt-[5px] text-green-900 text-[16px] sm:text-[23px] mb-[2px]'>Help us solve your queries and problems by answering the following:</h1>
          <div className='queryForm'>
            <h1 className='inline mr-[25px]'>1. You are: </h1>
            <label className='labLab'>
            <input
              type="radio"
              value="Student"
              className='radLab'
              checked={postOption === "Student"}
              onChange={onPostChange}/>
              Student
          </label>
          <label className='labLab'>
            <input
              type="radio"
              className='radLab'
              value="Alumni"
              checked={postOption === "Alumni"}
              onChange={onPostChange}/>
            Alumni
          </label>
          </div>

          <div className='queryForm'>
            <h1 className='inline mr-[25px]'>2. Your gender: </h1>
            <label className='labLab'>
            <input
              type="radio"
              value="Male"
              className='radLab'
              checked={selectedOption === "Male"}
              onChange={onValueChange}/>
            Male
          </label>
          <label className='labLab'>
            <input
              type="radio"
              value="Female"
              className='radLab'
              checked={selectedOption === "Female"}
              onChange={onValueChange}/>
            Female
          </label>
          <label className='labLab'>
            <input
              type="radio"
              value="Other"
              className='radLab'
              checked={selectedOption === "Other"}
              onChange={onValueChange}/>
            Other
        </label>
          </div>

          <div className='queryForm'>
            <h1 className='inline mr-[25px]'>3. Have you ever opted for professional help? </h1>
            <label className='labLab'>
            <input
              type="radio"
              value="profYes"
              className='radLab'
              checked={profOption === "profYes"}
              onChange={onProfChange}/>
            Yes
          </label>
          <label className='labLab'>
            <input
              type="radio"
              value="profNo"
              className='radLab'
              checked={profOption === "profNo"}
              onChange={onProfChange}/>
            No
          </label>
          </div>

          <div className='queryForm'>
            <h1 className='inline mr-[25px]'>4. Are you willing to seek professional help in the future?</h1>
            <label className='labLab'>
            <input
              type="radio"
              value="futYes"
              className='radLab'
              checked={futOption === "futYes"}
              onChange={onFutChange}/>
            Yes
          </label>
          <label className='labLab'>
            <input
              type="radio"
              value="futNo"
              className='radLab'
              checked={futOption === "futNo"}
              onChange={onFutChange}/>
            No
          </label>
          </div>
          <div className='queryForm mb-[3px]'>5. Mention your query</div>
          </div> */}
          <textarea  onChange={(e)=>setNewConfess(e.target.value)} value={newConfess} rows={7}  wrap="hard" placeholder='Write your concern' className='txtAr wmatch text-[16px] text-[#474747] sm:text-[18px] rounded-lg '></textarea>
          <div className='flex subButtons'>
            {userid===""?<button className='signIn cmn' onClick={signIn}>Sign in</button>:<></>}
            <div>
              <button onClick={submitConfess} className='sub cmn'>Submit</button>
              <button onClick={clearTextArea} className='clr cmn'>Clear</button>
            </div>
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
            <img src="/helpline/MHTest.webp" alt="MHTest" className='MHTImg' />
            <div className='mt-[6px] leading-[1]'>
              Mental Health Assessment
            </div>
          </a>
          <a href="/music" className='Music commonMT'>
            <img src="/carousel/music.webp" alt="Music" className='MusicImg' />
            <div className='mt-[6px] leading-[1]'>
              Music & Podcasts
            </div>
          </a>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
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
            margin: 0px 30px 20px 30px;
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
            width:250px;
          }
          .MHTest:hover{
            background-color:#fceac5;
          }
          .MHTImg{
            width:150px;
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
            width:180px;
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
          .seekHelp{
            align-items:center;
            background-color:#effaeb;
            border-radius:18px;
            padding:20px 45px 25px 45px;
            border:2px solid #b0b0b0;
            margin:20px 7vw 20px 7vw;
            width:1083px;

          }
          .seekHelpHead{
            color:#029e36;
            align-self:start
          }
          .seekHelpDesc{
            font-size:20px;
          }
          .txtAr{
            padding:8px 14px;
            border:2px solid  #b0b0b0
          }
          .wmatch{
            width:88%;
          }
          .labLab{
            margin-right:15px;
          }
          .radLab{
            margin-right:3px;
          }
          .txtpts{
            font-size:20px;
          }
          .queryForm{
            font-size:20px;
          }
          .subButtons{
            width:88%;
            justify-content:space-between;
          }
          .cmn{
            padding: 6px 14px;
            margin:10px 0px;
            font-size:20px;
            border-radius:6px;
            transition: .2s ease;
          }
          .sub{
            background-color:#4e54cb;
            color:white;
          }
          .sub:hover{
            background-color:#3239c7;
          }
          
          .signIn{
            background-color:#099476;
            color:white
          }
          
          .clr{
            background-color:#b0b0b0;
            color:white;
            margin-left:10px;
          }
          .clr:hover{
            background-color:#828282;
          }
           @media screen and (max-width:1220px){
            .mainCont{
              margin-left:25px;
              margin-right:25px;
            }
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
            .seekHelp{
              margin-left:20px;
              margin-right:20px;
              width:860px;
            }
            .wmatch{
              width:92%;
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
            // .MHTImg{
            //   width:280px;
            // }
            // .MusicImg{
            //   width:300px;
            // }
            .testMusicCont{
              font-size:25px;
            }
            .seekHelp{
              margin-left:12px;
              margin-right:12px;
              width:760px;
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
              .seekHelp{
                width:654px;
              }
              .wmatch{
                width:95%;
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
              .wmatch{
                width:95%;
              }
              .subButtons{
                width:95%;
              }
              .seekHelp{
                padding:10px 20px 25px 20px;
                width:auto;
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
              .commonMT{
                padding:5px 8px; 
              }
              .MHTest{
                padding:5px 0px;
                font-size:20px;
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
                width:120px;
              }
              .MusicImg{
                width:170px;
              }
            }
            @media screen and (max-width:600px){
              .MHTest{
                width:170px;
                margin-right:24px;
              }
              .MHTImg{
                width:120px;  
              }
              .txtpts{
                font-size:16px;
              }
              .MusicImg{
                width:150px;
              }
              .Music{
                width:160px;
              }
              .wmatch{
                width:100%;
              }
              .subButtons{
                width:100%;
              }
              .seekHelp{
                margin:15px 5px 15px 5px;
                padding-bottom:10px;
              }
              .seekHelpHead{
                margin-bottom:6px;
              }
              .seekHelpDesc{
                font-size:14px;
              }
              .queryForm{
                font-size:14px;
              }
            }
            @media screen and (max-width:380px){
              .MHTest{
                margin-right:15px;
              }
            }
        `}
      </style>
    </div>
  )
}

export default resources