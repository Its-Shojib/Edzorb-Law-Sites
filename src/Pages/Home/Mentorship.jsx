import img from '../../../src/assets/Home/mentorship.png'

const Mentorship = () => {
    return (
        <div className='relative my-10 mb-72'>
            <div className='h-[300px] z-10 bg-gradient-to-r from-blue-600 to-cyan-300 w-full opacity-30'></div>
            <div className='flex flex-col md:flex-row md:gap-10 z-20 top-3 absolute md:right-52 left-auto'>
                <div className='flex-1 md:pt-10'>
                    <img className='h-[250px] w-full md:h-[500px] rounded-3xl' src={img} alt="" />
                </div>
                <div className='flex-1 md:pt-20 space-y-5'>
                    <h1 className='text-2xl font-bold max-w-lg mt-5'>Are You Ready to Begin Your Judiciary <br /> Journey? Sign Up Now for Free <br /> Mentorship Session.</h1>
                    <button className='bg-[#121436] text-lg text-white font-bold px-4 py-2 rounded-lg cursor-pointer z-50'>Book Now Free Mentorship</button>
                    <div className='flex gap-3 justify-center items-center z-20'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <p className='font-bold'>Joined by 10,000+ Students</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mentorship;