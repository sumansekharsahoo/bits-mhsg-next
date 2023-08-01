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
      img_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      head:'Our Headliner Events',
      desc: 'Checkout our events page for more details',
      url:'www.instagram.com'
    },
    {
        img_url: 'https://images.unsplash.com/photo-1689267305146-155a1459752c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
        head:'Art Therapy',
        desc: 'BITS MHSG is an organization that helps students to overcome Their mental health problems',
        url:'www.instagram.com'
    },

    {
      img_url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      head:'Peaceful Music',
      desc: 'BITS MHSG is an organization that helps students to overcome Their mental health problems',
      url:'www.instagram.com'
    },
    {
      img_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      head:'Emergency Contacts',
      desc: 'BITS MHSG is an organization that helps students to overcome Their mental health problems',
      url:'https://www.instagram.com'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


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
              height:40vh;
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