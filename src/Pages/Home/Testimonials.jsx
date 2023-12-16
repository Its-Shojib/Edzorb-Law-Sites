import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import first from '../../assets/Testimonials/1.png'
import second from '../../assets/Testimonials/2.png'
import third from '../../assets/Testimonials/3.png'
import four from '../../assets/Testimonials/4.png'
import five from '../../assets/Testimonials/5.png'
import six from '../../assets/Testimonials/6.png'
import seven from '../../assets/Testimonials/7.png'
import eight from '../../assets/Testimonials/8.png'

const Testimonials = () => {
    return (
        <div className='w-8/12 mx-auto -mt-10 mb-10'>
            <Swiper autoplay={{ delay: 2000, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className='rounded-3xl'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={first} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={second} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={third} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-3xl'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={four} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={five} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={six} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-3xl'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={second} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={eight} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={seven} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-3xl'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={third} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={first} alt="" />
                        <img className='rounded-3xl w-80 hover:scale-y-105' src={six} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Testimonials;