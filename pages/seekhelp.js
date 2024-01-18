import React from 'react'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import { getAuth, deleteUser } from "firebase/auth";
import {auth} from "@/config/firebase"
import {onAuthStateChanged} from "firebase/auth";
import { useRouter } from 'next/router';
import {getDocs, collection, query, where, deleteDoc,doc,Timestamp, orderBy } from "firebase/firestore"
import {db} from "../config/firebase"
import moment from 'moment';
import ConfessCell from '@/components/ConfessCell';
import {admins} from "@/components/index"

const seekhelp = () => {
    const router = useRouter();
    const [username, setUsername]=useState("");
    const [unresolvedConfessList, setUnresolvedConfessList]= useState([]);
    const [resolvedConfessList, setResolvedConfessList]= useState([]);

    let qcf;
    let qct;
    let email;

    useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const userid = user.uid;
        setUsername(displayName);
        email = user.email;
        admins.includes(email)?true:router.push('/');
        const unresolvedConfessCollectionRef= collection(db, "confess")
        qcf = query(unresolvedConfessCollectionRef, where("resolved",'==',false));
        getUnresolvedConfessList();
        const resconfessCollectionRef= collection(db, "confess")
        qct = query(resconfessCollectionRef, where("resolved",'==',true));
        getResolvedConfessList();
      } else {
        router.push('/');
      }
    });
  },[])

      const getUnresolvedConfessList = async ()=>{
        try{
        const data = await getDocs(qcf);
        const filteredData= data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
        }));
        setUnresolvedConfessList(filteredData);
        } catch (err){
        console.error(err)
        }
    }
    const getResolvedConfessList = async ()=>{
        try{
        const data = await getDocs(qct);
        const filteredData= data.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
        }));
        setResolvedConfessList(filteredData);
        } catch (err){
        console.error(err)
        }
    }

  return (
    <div className=''>
        <Head>
            <title>SeekHelp Admin</title>
        </Head>
        <div className='flex flex-col align-middle'>
            <div className='text-center md:text-[34px] text-[24px]'>Seek help queries</div>
            <div className='my-[20px]'>
                <div className='text-[24px]'>Unresolved queries</div>
                {unresolvedConfessList.map((confObj)=>{
                      return <ConfessCell name={confObj.name} txt={confObj.txt} timeStamp={moment(confObj.timestamp.seconds*1000).format("lll")} mail={confObj.mail} cid={confObj.id} resolved={confObj.resolved} mark={true}/>
                })}
            </div>
            <div>
                <div className='text-[24px]'>Resolved queries</div>
                {resolvedConfessList.map((confObj)=>{
                      return <ConfessCell name={confObj.name} txt={confObj.txt} timeStamp={moment(confObj.timestamp.seconds*1000).format("lll")} mail={confObj.mail} cid={confObj.id} resolved={confObj.resolved} mark={true}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default seekhelp