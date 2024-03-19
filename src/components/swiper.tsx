'use client';
import { PropsWithChildren } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
  Swiper as ReactSwiper,
  SwiperSlide as ReactSwiperSlide,
  SwiperProps,
} from 'swiper/react';

export function Swiper({ children, ...props }: PropsWithChildren<SwiperProps>) {
  return (
    <div>
      {/* div required to prevent flexbox parent bug */}
      <ReactSwiper
        className="!pb-8"
        modules={[Pagination]}
        observer
        observeParents
        slidesPerView={1}
        spaceBetween={24}
        autoHeight
        pagination={{
          enabled: true,
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        {...props}
      >
        {children}
      </ReactSwiper>
    </div>
  );
}

export const SwiperSlide = ReactSwiperSlide;
