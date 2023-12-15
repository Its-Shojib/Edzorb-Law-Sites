import img1 from '../../assets/Home/photo_2023-12-15_18-22-13.jpg'
import img2 from '../../assets/Home/photo_2023-12-15_18-22-15.jpg'
import img3 from '../../assets/Home/photo_2023-12-15_18-22-17.jpg'

const Graduates = () => {
    return (
        <div className='my-10 w-full mx-auto flex justify-center items-center'>
            <div className='flex flex-col md:flex-row gap-8'>
                <img className='rounded-2xl w-80 ' src={img1} alt="" />
                <img className='rounded-2xl w-80 ' src={img2} alt="" />
                <img className='rounded-2xl w-80 ' src={img3} alt="" />
            </div>
        </div>
    )
}
export default Graduates;