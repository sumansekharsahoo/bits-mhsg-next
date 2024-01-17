import React, { useEffect } from 'react'
import { useState } from 'react'
import {db} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getDocs, collection, query, where, addDoc,Timestamp, orderBy} from "firebase/firestore"
import {auth,googleProvider} from "../config/firebase"
import moment from 'moment'
import CommentCell from './CommentCell';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comment = ({slug}) => {
  const [commentList, setCommentList]= useState([]);
  const [newComment, setNewComment]= useState("");
  const [username, setUsername]=useState("");

  const commentCollectionRef= collection(db, "comments")
  const q = query(commentCollectionRef, where("postSlug", "==", slug), orderBy("timestamp"));

  const getCommentList = async ()=>{
    try{
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
  useEffect(()=>{
    auth.onAuthStateChanged(
      async(user)=>{
        if(user){
          let username= user.displayName;
          setUsername(username);
        }
        else{
          setUsername("");
        }
      }
    )
    getCommentList();
  },[]);

  const submitComment= async()=>{
    const auth= getAuth();
    const user= auth.currentUser;
    if(user!==null){
      const displayName= user.displayName;
      const cur_timestamp=Timestamp.fromDate(new Date())
      try{
        await addDoc(commentCollectionRef, {commentText: newComment, commentor: displayName, timestamp:cur_timestamp, postSlug:slug})
      }catch(err){
        console.error(err);
      }
      setNewComment('');
      getCommentList(); 
    }
    else{
      toast.error("Sign In to Comment!",{
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
    setNewComment('');
  }

    const signIn = async () => {
      try {
      await signInWithPopup(auth, googleProvider);
      setLoginStatus(true);
      } catch (err) {
      console.error(err);
      }
  };

  return (
    <div className='commentContainer rounded-xl shadow-lg'>
      <div className='bg-[#ebfadc] commentBox rounded-tl-xl rounded-tr-xl py-[8px]'>
        <div className='sm:text-[35px] mb-[10px] text-[28px]'>
          Leave a comment!
        </div>
        <div className='inputSubmit'>
          <textarea onChange={(e)=>setNewComment(e.target.value)} value={newComment}  wrap="hard" placeholder='Write a comment' className='textArea text-[16px] text-[#474747] sm:text-[18px] rounded-lg'></textarea>
          <div className='flex justify-between w-[100%] align-middle'>

              {username===""?<button onClick={signIn} className='commentButton signInCommentButton'>Sign In</button>:<></>}

            <div>
              <button onClick={submitComment} className='submitCommentButton commentButton'>Submit</button>
              <button onClick={clearTextArea} className='clearCommentButton commentButton'>Clear</button>
            </div>
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
      </div>
      <style jsx>{`
      .commentBox{
        display:flex;
        flex-direction:column;
        align-items:center;
      }
      .commentContainer{
        width: 65vw;
        background-color:white;
        margin:30px 0px;
      }
      .inputSubmit{
        display:flex;
        flex-direction:column;
        align-items:self-end;
        width:42vw;
      }
      .textArea{
        width:100%;
        height:100px;
        padding:8px 14px;
        border:2px solid  #b0b0b0
      }

      .commentButton{
        padding: 6px 14px;
        margin:10px 0px;
        font-size:20px;
        border-radius:6px;
        transition: .2s ease;
      }
      .submitCommentButton{
        background-color:#4e54cb;
        color:white;
      }
      .submitCommentButton:hover{
        background-color:#3239c7;
      }
      
      .signInCommentButton{
        background-color:#099476;
        color:white
      }
      
      .clearCommentButton{
        background-color:#b0b0b0;
        color:white;
        margin-left:10px;
      }
      .clearCommentButton:hover{
        background-color:#828282;
      }
      
      .commentCellContainer{
        display:flex;
        flex-direction:column;
        align-items:center;
      }
      @media only screen and (max-width: 1200px){
        .commentContainer{
          width: 80vw;
        }
        .inputSubmit{
          width:60vw;
        }
      }
      @media only screen and (max-width: 780px){
        .commentContainer{
          width: 85vw;
        }
        .inputSubmit{
          width:70vw;
        }
      }
      @media only screen and (max-width: 500px){
        .commentContainer{
          width: 95vw;
        }
        .inputSubmit{
          width:88vw;
        }
        .commentButton{
          padding: 4px 12px;
          font-size:16px;
        }
      }
      `}</style>
      <div className='commentCellContainer'>
        <div className='sm:text-[35px] my-[10px] text-[28px]'>Comments</div>
        {commentList.map((commentObj)=>{
          if(commentObj.commentor==username){
            return <CommentCell commentor={commentObj.commentor} commentText={commentObj.commentText} timeStamp={moment(commentObj.timestamp.seconds*1000).format("lll")} delete="1" cid={commentObj.id}/>
          }else{
            return <CommentCell commentor={commentObj.commentor} commentText={commentObj.commentText} timeStamp={moment(commentObj.timestamp.seconds*1000).format("lll")} delete="0" cid={commentObj.id}/>
          }
      })}
      {commentList.length==0?<div className='text-[16px] sm:text-[18px] mb-[6px]'># No comments yet #</div>:<></>}
      </div>
    </div>  
  )
}

export default Comment