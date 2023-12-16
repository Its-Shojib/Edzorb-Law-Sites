import Lottie from "lottie-react";
import animation from '../../../public/Animation - 1702642228895.json'

const Banner = () => {
    return (
        <div className="bg-[#121436] min-h-[500px]">
            <div className="flex flex-col md:flex-row justify-around items-center max-w-screen-xl mx-auto">
                <div className="flex-1 text-white md:pl-20 space-y-5">
                    <h1 className="text-5xl font-bold">Turn Your Judiciary <br /> Dream Into Reality</h1>
                    <p className="text-lg">Revolutionize Your Prelims + Mains + Interview <br />
                        Preparation in an Integrated Manner.
                    </p>
                    <p className="bg-white shadow-white text-black p-2 rounded-md max-w-sm text-lg font-bold">#1 Most Downloaded Judicial Services App</p>
                    <div className="flex gap-3">
                        <a href=""><img className="rounded-xl" src="/public/play.jpg" alt="" /></a>
                        <a href=""><img className="rounded-xl" src="/public/app.jpg" alt="" /></a>
                    </div>
                </div>
                <div className="flex-1 min-h-[350px]">
                    {/* <img className="w-full min-h-[350px]" src="/public/banner.jpg" alt="" /> */}
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>

            <div className="bg-black h-16 ">
                <p className="text-center text-white pt-4">Why Edzorb Law App is ❤ by Over 10,000+ Users. <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div> <span className="underline">Read Reviews</span></p>
            </div>
        </div>
    )
}
export default Banner;