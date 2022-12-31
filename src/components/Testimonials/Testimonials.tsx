import React from 'react';
import styled from './Testimonials.module.scss';
import { TestimonialItem } from './TestimonialItem/TestimonialItem';
import { testimonialsData } from '../../utils/db/testimonialsData';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Testimonials = () => {
  return (
    <section className={styled.testimonials}>
      <div className={styled.container}>
        <div className={styled.sectionTitle}>
          <h2>{testimonialsData.title}</h2>
          <p>{testimonialsData.description}</p>
        </div>
        <Swiper
          autoplay={true}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialsData.data.map((item, index) => {
            return (
              <SwiperSlide className={styled.swiperSlide}>
                <TestimonialItem key={index} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
