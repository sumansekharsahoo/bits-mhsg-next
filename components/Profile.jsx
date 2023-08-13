import React from 'react'
import Image from 'next/image'
const Profile = (props) => {
  return (
    <div className='w-72 h-96  rounded-2xl profile flex flex-col align-middle profile '>
      <img src={props.img} alt="" className='mx-12  object-cover rounded-full h-48 profimg mb-2'/>
      <div className='flex flex-col align-middle'>
        <div className='profname text-center'>{props.profName}</div>
        <div className='profdesc text-center '>{props.pos}</div>
      </div>
      <div className='profsocial flex  align-middle justify-center mt-5'>
        <div className='mr-4'>
          <a href={props.insta} target='_blank'><Image src="/icons/logo-instagram.svg" width={24} height={24} alt="logo" /></a>
        </div>
        <div>
          <a href={props.linkin} target='_blank'><Image src="/icons/logo-linkedin.svg" width={24} height={24} alt="logo" /></a>
        </div>
      </div>
      <style jsx>{`
        .profname{
          font-size:22px;
        }
        .profdesc{
          font-size:17px;
        }
        .profile{
          border:3px solid #b0b0b0;
          transition: all .2s ease-out;
          background-color:${props.bcol};
          color:${props.tcol};
        }
        .profile:hover{
          border:3px solid ${props.tcol}
        }
        .profile:hover .profimg{
          border:3px solid ${props.tcol};
        }
        .profimg{
          border:3px solid #b0b0b0;
          transition: all .2s ease-out;
          margin-top:35px;
        }
        
      `}</style>
    </div>
    
  )
}

export default Profile