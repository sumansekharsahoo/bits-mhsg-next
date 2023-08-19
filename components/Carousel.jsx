import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const slides = [
    {
      img_url: '/official/MHSG_Short.png',
      head:'BITS MHSG',
      desc: 'BITS MHSG is a pan-campus initiative striving to create awareness about Mental Health',
      url:'/'
    },
    {
      img_url: '/carousel/calendar.png',
      head:'Our Headliner Events',
      desc: 'Checkout our events page for more details',
      url:'/events'
    },
    {
        img_url: '/carousel/articles.png',
        head:'Articles',
        desc: 'Explore our insightful articles on mental health for a brighter mind and a healthier you!',
        url:'/articles'
    },

    {
      img_url: '/carousel/music.png',
      head:'Music and Podcasts',
      desc: 'Unlock a cascade of positivity with our handpicked playlist, elevating your mood one beat at a time!',
      url:'/music'
    },
    {
      img_url: '/carousel/askhelp.png',
      head:'#AskForHelp',
      desc: 'Feeling low or in need of mental health support? Click here for help!',
      url:'/resources'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide? 0 : currentIndex+1;
  //   setCurrentIndex(newIndex);
  // };

  const nextSlide=()=>{
    setCurrentIndex((prevIndex)=>{
      return (prevIndex+1)%(slides.length);
    })
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

useEffect(()=>{
  const slideInterval =setInterval(nextSlide,2300)
  return ()=>clearInterval(slideInterval)
},[])

  return (
    <div className='pb-8 px-4 pt-4 group flex flex-col mainCont'>
        {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-100 '
      >  
      </div> */}
      <a href={slides[currentIndex].url} className='flex flex-col innerCont'>
        <img src={slides[currentIndex].img_url} alt="img not rendered" className='carouselImg'/>
        <div className=' text-[#1ba19c] text-center HeadTxt'>{slides[currentIndex].head}</div>
        <div className='text-black text-center italic DescTxt'>
            {slides[currentIndex].desc}
        </div>
      </a>
      {/* Left Arrow */}
      <div className='absolute top-[35%] md:top-[40%] lg:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' absolute top-[35%] md:top-[40%] lg:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .mainCont{
            align-items:center;
          }
          .innerCont{
            align-items:center;
          }
          .carouselImg{
            height:70vh;
            object-fit:cover;
            border-radius:15px;
          }
          .HeadTxt{
            font-size:28px;
            margin-top:5px;
            font-weight:500;
          }
          .DescTxt{
            font-size:22px;
          }
          @media screen and (max-width:900px){
            .carouselImg{
              height:50vh;
            }
            .HeadTxt{
              font-size:26px;
            }
            .DescTxt{
              font-size:20px;
            }
          }
          @media screen and (max-width:600px){
            .carouselImg{
              height:36vh;
            }
            .HeadTxt{
              font-size:22px;
            }
            .DescTxt{
              font-size:17px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Carousel

