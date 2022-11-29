import React from 'react'

// testimonials data
import { testimonials } from '../data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'

// import required modules
import { Autoplay, Pagination } from 'swiper'

const TestiSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorText, authorName, authorPosition } = item
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 my-5 justify-center">
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-5xl mb-4 font-normal text-center">
                    {authorText}
                  </h5>
                  <div className='text-center'>
                    <p className="text-4xl text-accent">{authorName}</p>
                    <p className='text-2xl'>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default TestiSlider
