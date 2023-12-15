import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// file1, file2, file3,
const Cards = ({ texts, title, img1, img2, img3, classT }) => {

    return (
        <div className="w-8/12 mx-auto shadow-xl border-1 my-10 bg-white rounded-[50px] h-[550px] p-12 -mt-12 mb-20">
            <div className={`flex sm:flex-col ${classT} justify-center gap-16`}>
                <div className='w-[380px]'>
                    <Swiper autoplay={{ delay: 1500, disableOnInteraction: false, }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px]' src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px]' src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide className='rounded-3xl'><img className='w-[370px] h-[450px]' src={img3} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className=" pt-10">
                    <h1 className='text-xl font-bold py-4'>{title}</h1>
                    <ul className="list-disc pl-4 space-y-3">
                        {
                            texts?.map((item) => <li className='text-sm text-gray-500' key={item.id}>{item}</li>)
                        }
                    </ul>
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