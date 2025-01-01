import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialItem from '../components/TestimonialItem';
export default function Testimonial() {
  return (
    <>
  {/*Testimonial Section Start */}
  <section
    id="testimonial"
    className="text-gray-400 bg-secondary-500 body-font "
  >
    <div className="container px-4 md:px-10 py-24 mx-auto flex flex-wrap border-t-2 border-secondary-600">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
          Testimonial
        </h2>
      </div>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="mySwiper"
    >
      <SwiperSlide>
     <TestimonialItem />
      </SwiperSlide>
      <SwiperSlide>
     <TestimonialItem />
      </SwiperSlide>
      <SwiperSlide>
     <TestimonialItem />
      </SwiperSlide>
      <SwiperSlide>
     <TestimonialItem />
      </SwiperSlide>
      
      {/* Add more slides as needed */}
    </Swiper>
      
    </div>
  </section>
  {/* Testimonial Section End */}
</>

  )
}
