import { FaPhone } from "react-icons/fa";
import one from '../../assets/FooterUp/1.png'
import two from '../../assets/FooterUp/2.png'
import three from '../../assets/FooterUp/3.png'
import four from '../../assets/FooterUp/4.png'

const FooterUp = () => {
    return (
        <div className="bg-[#121436] text-white mt-10">
            <div className="text-center space-y-8 py-10">
                <h1 className="text-5xl font-bold">Why Edzorb Law?</h1>
                <p className="max-w-[1000px] mx-auto">The difference between Edzorb & your other coaching institute which is “coaching” you, is Chalk & Cheese. Edzorb Law is not a Coaching institute, at best we are your Self Study Companion. Edzorb Law is a massive Rank Generator in the Post-Pandemic era of Judiciary Preparation. Ask around, your seniors, juniors, and selected candidates, about the difference Edzorb Law brings to your preparation.
                </p>
            </div>
            <div className="max-w-screen-lg mx-auto flex justify-center gap-10 flex-col md:flex-row py-10">
                <div className="flex-1 text-left space-y-5">
                    <ul className="list-disc text-left">
                        <li>Edzorb has a Structure</li>
                        <li>Edzorb has a Schedule</li>
                        <li>Edzorb has a System</li>
                        <li>Edzorb has SOPs</li>
                    </ul>
                    <p>In Edzorb’s system you will thrive because where there is a structure, & according to the structure, one knows if you study like this, you make headway that will be recognised in the form of RESULTS.</p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <img className="rounded-2xl" src={one} alt="" />
                            <h1 className="text-2xl font-bold">1,000+</h1>
                            <h2 className="text-xl font-bold">Ranks</h2>
                        </div>
                        <div className="space-y-2">
                            <img className="rounded-2xl" src={two} alt="" />
                            <h1 className="text-2xl font-bold">10,000+</h1>
                            <h2 className="text-xl font-bold">Students</h2>
                        </div>
                        <div className="space-y-2">
                            <img className="rounded-2xl" src={three} alt="" />
                            <h1 className="text-2xl font-bold">100,000+</h1>
                            <h2 className="text-xl font-bold">Monthly Users</h2>
                        </div>
                        <div className="space-y-2">
                            <img className="rounded-2xl" src={four} alt="" />
                            <h1 className="text-2xl font-bold">7+</h1>
                            <h2 className="text-xl font-bold">Courses</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <form className="flex flex-col w-3/4 mx-auto text-black bg-white rounded-3xl py-5">
                        <h1 className="text-3xl text-center">Get a Call Back <FaPhone className="inline" /></h1>
                        <input type="text" name="to_name" placeholder="Your Name"
                            className="p-2 rounded-md text-white border-black border-2" />
                        <input type="text" name="from_name" placeholder="name@example.com"
                            className="my-2 p-2 border-black border-2 rounded-md text-white " />
                        <input type="text" name="to_name" placeholder="Phone Number"
                            className="p-2 mb-1 border-black border-2 rounded-md text-white " />
                        <textarea name="message" className="p-2 rounded-md text-white border-black border-2" rows="5"
                            placeholder="Your Message (Optional)"></textarea>
                        <p className='text-center'><button className='bg-[#121436] px-5 py-3 text-xl font-bold text-white rounded-md mt-5'>Submit</button></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FooterUp;