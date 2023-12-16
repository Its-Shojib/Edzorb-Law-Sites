import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import img from '../../../public/logo.jpg'

const Footer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto bg-[#151234] text-white ">
            <footer className="footer p-10 max-w-screen-xl mx-auto">
                <aside>
                    <img className='cursor-pointer' src={img} alt="" />
                    <p>Dont Waste Time. JOIN NOW</p>
                    <p><FaTelegram className='inline text-4xl cursor-pointer' /> <FaInstagram className='inline text-4xl cursor-pointer' /> <FaYoutube className='inline text-4xl cursor-pointer' /></p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item text-black" />
                            <button className="btn bg-yellow-500 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>

    )
}
export default Footer;