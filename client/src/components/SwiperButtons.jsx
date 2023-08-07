import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="md:w-full md:mx-0 mx-7 flex justify-between mt-3">
      <button onClick={() => swiper.slidePrev()} className='flex text-[#15BFFD] font-zen items-center'><span className='text-xl flex items-center mr-2'><ion-icon name="arrow-back-outline"/></span> Previous</button>
      <button onClick={() => swiper.slideNext()} className='flex text-[#15BFFD] font-zen items-center'>Next<span className='text-xl flex items-center ml-2'><ion-icon name="arrow-forward-outline"/></span></button>
    </div>
  );
};