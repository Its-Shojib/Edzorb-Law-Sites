import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import first from '../../assets/Unique Law/1.png'
import second from '../../assets/Unique Law/2.png'
import third from '../../assets/Unique Law/3.png'
import fourth from '../../assets/Unique Law/4.png'
import fifth from '../../assets/Unique Law/5.png'
import sixth from '../../assets/Unique Law/6.png'
import seventh from '../../assets/Unique Law/7.png'
import eighth from '../../assets/Unique Law/8.png'
import ninth from '../../assets/Unique Law/9.png'
import tenth from '../../assets/Unique Law/10.png'
import eleventh from '../../assets/Unique Law/11.png'
import twielvth from '../../assets/Unique Law/12.png'

const UniqueLaw = () => {
    return (
        <div className='md:w-[900px] mx-auto -mt-10 mb-10'>
        <Swiper autoplay={{ delay: 2000, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide className='rounded-3xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={first} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={second} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={third} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={fourth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={fifth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={sixth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={seventh} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={eighth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={ninth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={tenth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={eleventh} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={twielvth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={second} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={fifth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={eighth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={twielvth} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-3xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={third} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={sixth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={ninth} alt="" />
                    <img className='rounded-3xl md:w-52 hover:scale-y-105' src={eleventh} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}
export default UniqueLaw;