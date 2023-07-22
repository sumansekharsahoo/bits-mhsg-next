import React from 'react'
import Image from 'next/image'
const Profile = (props) => {
  return (
    <div className='w-72 h-96 bg-[#d6e7a8] rounded-2xl profile flex flex-col align-middle profile mx-10 my-10'>
      <div className='py-5'>
        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1689966412~exp=1689967012~hmac=587709328adb58f443667b6923c536e3cd1080ea73808ed1f495a69b32298191" alt="" className='mx-12  object-cover rounded-full h-48 profimg'/>
      </div>
      <div className='flex flex-col align-middle'>
        <div className='profname text-center'>Suman Sekhar Sahoo</div>
        <div className='profdesc text-center '>Webdev team head</div>
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
          border:3px solid #d2d5da
        }
        .profimg{
          border:3px solid #d2d5da
        }
        
      `}</style>
    </div>
    
  )
}

export default Profile