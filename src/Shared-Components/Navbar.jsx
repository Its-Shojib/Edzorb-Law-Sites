import { Link } from "react-router-dom";
import { } from "react-icons/fa";
import {  } from "react-icons/io5";

const Navbar = () => {
    let links = <>
        <li><Link><img className="w-4" src="/public/shieldimg.png" alt="" />  Premium+</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link> <img className="w-8" src="/public/micro.png" alt="" /> Podcast</Link></li>
    </>
    return (
        <div className="navbar fixed top-0 bg-[#121436] h-20">
            <div className="max-w-screen-2xl  mx-auto gap-40 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className="rounded-2xl" src="/logo.jpg" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex justify-center items-center">
                    <ul className="menu menu-horizontal text-white text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 items-center">
                        <a className="cursor-pointer w-8 h-8" href="">
                            <img className="w-full" src="/play store.png" alt="" />
                        </a>
                        <a className="cursor-pointer w-12 h-10" href="">
                            <img className="w-full" src="/apple.png" alt="" />
                        </a>
                        <a className="px-5 font-semibold text-lg py-2 rounded-md bg-yellow-500 cursor-pointer">Login</a>
                        <a className="px-3 font-semibold text-lg py-2 rounded-md bg-white cursor-pointer">SignUp</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Navbar;
