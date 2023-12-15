import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import first from './../../assets/Slider Award/1.png'
import second from './../../assets/Slider Award/2.png'
import third from './../../assets/Slider Award/3.png'
import fourth from './../../assets/Slider Award/4.png'


const Award = () => {
    return (
        <div className='w-9/12 mx-auto my-10'>
            <Swiper autoplay={{ delay: 2000, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className='rounded-3xl'><img className='rounded-3xl' src={first} alt="" /></SwiperSlide>
                <SwiperSlide className='rounded-3xl'><img className='rounded-3xl' src={second} alt="" /></SwiperSlide>
                <SwiperSlide className='rounded-3xl'><img className='rounded-3xl' src={third} alt="" /></SwiperSlide>
                <SwiperSlide className='rounded-3xl'><img className='rounded-3xl' src={fourth} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Award;