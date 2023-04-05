import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Headofsection from './Headofsection'
import Card from './Card'

function Toporder() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    const users = [
      { id: 1, image: 'avatar.jpg', name: 'Youssef Elmahallawy', price: 65, rate: 4, location: 9500 , color: '#8BE78B'},
      { id: 2, image: 'avatar2.jpg', name: 'Alaa Mohamed', price: 75, rate: 4.5, location: 3600 , color: '#FEC90F'},
      { id: 3, image: 'avatar3.png', name: 'Eslam Elmahallawy', price: 15, rate: 4.9, location: 5600 , color: '#2196f3'},
      { id: 4, image: 'avatar4.jpg', name: 'Ahmed Elmahallawy', price: 25, rate: 5, location: 2540 , color: '#8BE78B'},
      { id: 5, image: 'avatar.jpg', name: 'Youssef Elmahallawy', price: 96, rate: 4.7, location: 245 , color: '#FEC90F'},
      { id: 6, image: 'avatar2.jpg', name: 'Alaa Mohamed', price: 45, rate: 4.5, location: 4566 , color: 'red'},
      { id: 7, image: 'avatar4.jpg', name: 'Ahmed Elmahallawy', price: 29, rate: 4.9, location: 2000 , color: '#8BE78B'},
    ]

  return (
    <div className="top-order flex justify-center pt-6 lg:pt-16 pb-12 lg:pb-36 " id='services'>
      <div className='container swiper-con'>
        <Headofsection title='Top Ordered' />
        <div className='flex mt-16 justify-center flex-wrap pb-5 px-4 sm:px-16 md:px-0 lg:px-16 xl:px-6'>
          <Swiper className=""
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 65,
              },
            }}
            loop={true}
            onAutoplayTimeLeft={onAutoplayTimeLeft} >
            {users.map((item) => {
              return (
                <SwiperSlide key={item.id}><Card image={item.image} name={item.name} price={item.price}
                  rate={item.rate} location={item.location} clr={item.color}/></SwiperSlide>
              )
            })}
            <div className="autoplay-progress w-0 " slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="2" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Toporder;