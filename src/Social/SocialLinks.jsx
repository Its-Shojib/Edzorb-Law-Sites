/* eslint-disable react/jsx-no-target-blank */
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa'

const SocialLinks = () => {

    let links = [
        {
            id: 1,
            child: (
                <>
                    Instagram <FaInstagram size={30}></FaInstagram>
                </>
            ),
            href: 'https://www.instagram.com/edzorblaw',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Youtube <FaYoutube size={30}></FaYoutube>
                </>
            ),
            href: 'https://www.youtube.com/@edzorblaw',
        },
        {
            id: 3,
            child: (
                <>
                    Telegram <FaTelegram size={30}></FaTelegram>
                </>
            ),
            href: 'https://t.me/edzorblaw',
            style: 'rounded-br-md',
        },
    ]
    return (
        <div className=' hidden md:flex flex-col top-[35%] fixed max-w-screen-xl'>
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={'flex justify-between items-center w-36 h-14 px-2 ml-[-100px] pl-4 hover:ml-[-10px] hover:rounded-md duration-300 text-white bg-gray-500' + " " + style}>
                            <a href={href}
                                download={download}
                                target='_blank'
                                rel='noreferrer'
                                className='flex justify-between items-center w-full'>
                                <>
                                    {child}
                                </>
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
export default SocialLinks;