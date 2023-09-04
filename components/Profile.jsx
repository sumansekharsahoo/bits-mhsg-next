import React from 'react'
import Image from 'next/image'
const Profile = (props) => {
  return (
    <div className='w-72 h-96 profile flex flex-col align-middle profile relative'>
      <Image src={props.img} alt="profile" placeholder = 'blur' blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECEjH/2gAMAwEAAhEDEQA/APTMgy2qGRkAAFkqiqqakmpVU1ECA4CcXEyLkCVDgkViBA8CTA0mWlGkyFECQFTTpVBNIySByCKkSORpIXMXICJFYci5AEYF4EnBo1OnreNL09Rp6grRpaNSGlRpagARoHFyJi+UtXzGnMTzGnMCORcgkVIyk4F4EnjaNRp664daaes5T0JejU6NBVpaWlpZUcTpykNI05ZctOQNa8teWXLXllNIqJioCYARfP6es9PXYa009Z6eg600az0aE00ajRqFq9VKzlVKWLW3Nac1hzWvNS1vzWvNc/Na81mmNpVysZ0r0y000I9AJ89o1np69DGtNPWWn6B1p6P0y9D0MOtdGs/R+jjNrWVUrGVU6OMWt5WnNc86ac9DFK6Oemk6c06aTpixuOidK9Oedn7ZadHoMPYReHo1no13cNaeh6Z6PSw609H6Zeh6WL019H6Zej9HGL02nSp0wnSp0cY9OidLnTnnSp0zY1K6J0uduadH7ZsdZXTOz9ub2ftnG46fYc3sDC87S1OjXZ5NVpanStOH0r0PTO9DTIxe2no/bOHGsc71Wk6XO2UNYx6redKnTCXFSix056beh6ZaNYsenmtfY9sfQ9M46xt7DD0BjTMgHR4yqaAYKkwGnM4qAFmqhgJkLgArXH0wAxXq5KkAy7wgAmn/2Q==' width={192} height={192} className='mx-12  object-cover rounded-full h-48 mt-[35px] border-[3px] border-[#b0b0b0] border-solid	 mb-2 z-20 '/>
      <div className='absolute w-full h-[132px] top-0 z-0 bdcol'></div>
      <div className='flex flex-col align-middle'>
        <div className='profname text-center'>{props.profName}</div>
        <div className='profdesc text-center '>{props.pos}</div>
      </div>
      <div className='profsocial flex  align-middle justify-center mt-5'>
        <div className='mr-4'>
          <a href={props.insta} target='_blank'><Image src="/icons/logo-instagram.svg" width={24} height={24} alt="logo" /></a>
        </div>
        <div>
          {props.linkin && <a href={props.linkin} target='_blank'><Image src="/icons/logo-linkedin.svg" width={24} height={24} alt="logo" /></a>}
        </div>
      </div>
      <style jsx>{`
        .profname{
          font-size:22px;
          font-weight:500;
        }
        .profdesc{
          font-size:17px;
        }
        .profile{
          border:3px solid #b0b0b0;
          transition: all .2s ease-out;
          background-color:#ffffff;
          color:black;
          border-radius:16px;
        }
        .bdcol{
          background-color:${props.bcol};
          border-top-left-radius:13px;
          border-top-right-radius:13px;
        }
        .profile:hover{
          // border:3px solid #4f4e4e;
          box-shadow: 1px 5px 22px 0px rgba(166,166,166,1);

        }
        .profile:hover .profimg{
          // border:3px solid #4f4e4e;
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