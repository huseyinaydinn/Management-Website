import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react";
import { Link } from 'react-scroll'
// images & Logos
import HeaderLogo from '../assets/Logo.svg'
import PlayStoreBtn from '../assets/PlayStore.svg'
import AppStoreBtn from '../assets/AppStore.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
    const [nav, setNav] = useState(false)
    const [header, setHeader] = useState(false);
    const desktopMode = useMediaQuery({
        query: "(min-width: 768px)"
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHeader(true)
            } else {
                setHeader(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <header className={`${header ? 'bg-primary-100 shadow-md' : `${nav ? 'bg-primary-100' : 'bg-transparent'}`} container max-w-[1920px] mx-auto text-neutral-900 py-6 fixed top-0 left-0 right-0 h-[80px] z-50 `}>
            <div className="mx-auto flex items-center justify-between">
                <div className="flex justify-start items-center gap-x-8">
                    <img src={HeaderLogo} alt="" />
                    <div className="hidden md:flex flex-row gap-x-4 text-[16px] font-semibold leading-[20px]">
                        <Link className="cursor-pointer hover:text-primary"
                            to="home"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Home</Link>
                        <Link className="cursor-pointer hover:text-primary"
                            to="features"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Features</Link>
                        <Link className="cursor-pointer hover:text-primary"
                            to="stories"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Stories</Link>
                        <Link className="cursor-pointer hover:text-primary"
                            to="about"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>About</Link>
                    </div>
                </div>
                <div className="flex-row gap-x-3 hidden md:flex cursor-pointer">
                    <a href="#"><img src={PlayStoreBtn} alt="PlayStore-Btn" /></a>
                    <a href="#"><img src={AppStoreBtn} alt="AppStore-Btn" /></a>
                </div>
                <div className="flex items-center justify-end md:hidden text-2xl">
                    {
                        nav ? <AiOutlineClose onClick={() => setNav(!nav)} className="cursor-pointer" /> : <AiOutlineMenu onClick={() => setNav(!nav)} className="cursor-pointer" />
                    }
                </div>
            </div>
            {
                nav ? (<div className="w-full bg-primary-100 flex flex-col absolute top-[80px] left-0 right-0 h-screen transition-all duration-300">
                    <div className="flex flex-col items-center gap-6 text-2xl font-bold pt-4">
                        <Link className="cursor-pointer"
                            to="home"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Home</Link>
                        <Link className="cursor-pointer"
                            to="pricing"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Pricing</Link>
                        <Link className="cursor-pointer"
                            to="careers"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Careers</Link>
                        <Link className="cursor-pointer"
                            to="help"
                            activeClass="active"
                            smooth={desktopMode}
                            spy={true}>Help</Link>
                    </div>
                </div>) : ''
            }
        </header>
    )
}
