import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { FaFile } from 'react-icons/fa';
// file1, file2, file3,
const Cards = ({ texts, title, img1, img2, img3, classT }) => {

    return (
        <div className="w-full md:w-9/12 mx-auto shadow-2xl border-1 bg-white rounded-[50px] md:h-[550px] p-5 md:p-12 md:-mt-12 my-24 z-30">
            <div className={`flex flex-col ${classT} justify-center gap-16`}>
                <div className='w-[380px]'>
                    <Swiper autoplay={{ delay: 1500, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px] rounded-3xl' src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px] rounded-3xl' src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px] rounded-3xl' src={img3} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="pt-10 p-2 rounded-md space-y-5">
                    <h1 className='text-xl font-bold py-4'>{title}</h1>
                    <ul className="list-disc pl-4 space-y-3 hover:text-white">
                        {
                            texts?.map((item) => <li className='text-sm text-gray-500 hover:text-white' key={item.id}>{item}</li>)
                        }
                    </ul>
                    <button className='bg-[#121436] px-4 py-2 text-xl font-bold text-white rounded-md '>Download Files <FaFile className='inline'></FaFile></button>
                </div>
            </div>
        </div>
    )
}
Cards.propTypes = {
    texts: PropTypes.array,
    title: PropTypes.string,
    img1: PropTypes.node,
    img2: PropTypes.node,
    img3: PropTypes.node,
    file1: PropTypes.node,
    file2: PropTypes.node,
    file3: PropTypes.node,
    classT: PropTypes.string,

}
export default Cards;