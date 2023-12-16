import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import { FaChevronCircleRight, FaCopyright, FaPhone, FaWhatsapp } from "react-icons/fa";

import first from '../../assets/Premium/1.png'
import second from '../../assets/Premium/2.png'
import third from '../../assets/Premium/3.png'

const Premium = () => {
    return (
        <div className='w-8/12 mx-auto -mt-10 mb-10'>
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className='rounded-3xl'>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={first} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={second} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={third} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-3xl'>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={first} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={second} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={third} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-3xl'>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={first} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={second} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-200 hover:bg-[#121436] hover:text-white rounded-3xl shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={third} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title bg-black text-white p-1 rounded-md">8 month</h2>
                                <p>Newly Lanched</p>
                                <div className='text-left space-y-3'>
                                    <p><FaCopyright className='inline' /> Visual Learning QBank Concept</p>
                                    <p><FaCopyright className='inline' />Simplified Notes</p>
                                    <p><FaCopyright className='inline' /> Epic Main Tast Series</p>
                                    <p><FaCopyright className='inline' />Med 90 days</p>
                                    <p><FaCopyright className='inline' />Check All features</p>
                                </div>
                                <button className='bg-[#121436] p-2 text-white rounded-md'>
                                    Buy Now! <FaChevronCircleRight className='inline' />
                                </button>
                                <div className='flex gap-4'>
                                    <FaWhatsapp className='text-3xl' /> <FaPhone className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <p className='text-center'><button className='bg-[#121436] p-3 text-white rounded-md mt-5'>Browse All Courses</button></p>
        </div>
    )
}
export default Premium;