import React from 'react'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import {auth} from "@/config/firebase"
import {onAuthStateChanged} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getDocs, collection, query, where, deleteDoc,doc } from "firebase/firestore"
import {db} from "@/config/firebase"

const userdata = () => {
    const [username, setUsername]=useState("");
    const [commentList, setCommentList]= useState([]);
    const [txtVal, setTxtVal]= useState("");

    useEffect(()=>{
    auth.onAuthStateChanged(
      async(user)=>{
        if(user){
          let username= user.displayName;
          setUsername(username);
          getCommentList();
        }
        else{
          setUsername("");
        }
      }
    )
  },[]);

  const getCommentList = async ()=>{
    try{
        const commentCollectionRef= collection(db, "comments");
        const q = query(commentCollectionRef, where("commentor", "==", username));
      const data = await getDocs(q);
      const filteredData= data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setCommentList(filteredData);
    } catch (err){
      console.error(err)
    }
  }

  const deleteCommentHandler = async()=>{
    // for(let i=0;i<commentList.length;i++){
    //     const commentDoc=doc(db,"comments",commentList[i].id);
    //     await deleteDoc(commentDoc);
    // }
    
  }

  const clickHandler=()=>{
    if(username===""){
        toast.error("Sign In to delete account",{
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
    else{
        if(txtVal!=="delete"){
            toast.warn("incorrect value",{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }else{
            deleteCommentHandler();
        }
    }
  }

  return (
    <div>
        <Head>
            <title>Data & User controls</title>
        </Head>
        <div className='bg-[#dff2e9] h-[280px] w-full flex py-[10px] px-[40px] items-center hero'>
            <img src="/official/MHSG_Short.png" alt="MHSGshort" className='image'/>
            <div className='text-5xl heading text-[#51b39c] font-semibold'>Data & User controls</div>
        </div>
        <div className='px-[40px] text-xl mt-5 mb-10 fontSz'>We use Firebase Google Authentication to verify your identity when you sign in to our website. Although signin in is optional to browse/view the website, it is required while writing a comment and adding your playlist. Google authentication ensures real humans are behind every comment, fostering meaningful and authentic conversations.</div>
        <div className='px-[40px] text-xl mt-5 mb-10 fontSz'>
            <div>
                <div className='sm:text-[22px] text-[20px] font-semibold'>Data accessed:</div>
                <ul className='list-disc ml-5'>
                    <li>email id</li>
                    <li>display name</li>
                </ul>
            </div>
            <div>
                <div className='sm:text-[22px] text-[20px] font-semibold mt-[15px]'>Zero Third-Party Sharing:</div>
                <div>
                    We never sell, rent, or trade your personal data with any third-party companies or organizations. Your information stays between you and us.
                </div>
            </div>
            <div>
                <div className='sm:text-[22px] text-[20px] font-semibold mt-[15px]'>User contols: </div>
                <div className='mb-[15px]'>
                    We believe you should have complete control over your personal information. If you ever decide to delete your data, we'll remove it from our database promptly.
                </div>
                <label for="delOption">Choose to delete: </label>
                <select name="delOption" id="delOption">
                <option value="commentsOnly">Only comments</option>
                <option value="allData">Comments and account data</option>
                </select>
                <span className='sm:ml-[40px] sm:inline block'>Type "delete" to confirm your choice: </span>
                <input type="text" onChange={(e)=>setTxtVal(e.target.value)} value={txtVal}  className='sm:p-[6px] w-[150px] sm:pl-[10px] p-[4px]' />
                <button onClick={clickHandler} className='rounded-3xl p-[4px] px-[10px] ml-[6px] text-white bg-[#ff5050]'>&gt;</button>
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
        </div>


        <style jsx>{`
            .image{
                height: 180px;
                object-cover:fit;
                margin-right:60px;
            }
            @media only screen and (max-width: 650px){
                .image{
                    height:120px;
                    margin-right:32px;
                }
                .heading{
                    font-size:30px;
                }
                .hero{
                    height:150px;
                }
                .fontSz{
                    font-size:16px;
                }
            }
        `}</style>
    </div>
  )
}

export default userdata