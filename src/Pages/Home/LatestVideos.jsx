import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import first from './../../assets/Latest Videos/1.png';
import second from './../../assets/Latest Videos/2.png';
import third from './../../assets/Latest Videos/3.png';
import fourth from './../../assets/Latest Videos/4.png';
import fifth from './../../assets/Latest Videos/5.png';
import sixth from './../../assets/Latest Videos/6.png';
import seventh from './../../assets/Latest Videos/7.png';
import eighth from './../../assets/Latest Videos/8.png';
import nineth from './../../assets/Latest Videos/9.png';
import tenth from './../../assets/Latest Videos/10.png';
import eleventh from './../../assets/Latest Videos/11.png';
import twielevth from './../../assets/Latest Videos/12.png';
import thirteenth from './../../assets/Latest Videos/13.png';
import fourthteen from './../../assets/Latest Videos/14.png';

const LatestVideos = () => {
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
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={fourth} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={fifth} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={sixth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={seventh} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={eighth} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={nineth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={tenth} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={eleventh} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={twielevth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={thirteenth} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={fourthteen} alt="" />
                    <img className='rounded-3xl w-80 hover:scale-y-105' src={fifth} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}
export default LatestVideos;