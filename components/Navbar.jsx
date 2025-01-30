"use client"

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { is } from './../.next/static/chunks/[root of the server]__31723f._';


const Navbar = ({isDark, setIsDark}) => {

   const [isScroll, setIsScroll] = useState(false);

    const  styleRef = useRef();
    const openMenu = () => {
        styleRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        styleRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);
    return (
        <>
         <div className='fixed top-12 right-0 w-11/12 -z-10 translate-y-[-80%]
         dark:hidden'>
            <Image src={assets.header_bg_color} alt="bg" className='w-full'/>
         </div>
           <nav className={`flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 w-full fixed ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ""}`}>
              <a href="#top">
                <Image src={assets.my_logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
              </a>

              <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? ' ' : "bg-white shadow-smn bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                 <li><a className='font-ovo' href="#top">Home</a></li>
                 <li><a className='font-ovo' href="#about">About me</a></li>
                 <li><a className='font-ovo' href="#services">Services</a></li>
                 <li><a className='font-ovo' href="#works">My works</a></li>
                 <li><a className='font-ovo' href="#contact">Contact me</a></li>
              </ul>

              <div className='flex items-center gap-4'>
                <button onClick={() => setIsDark(!isDark)}><Image src={isDark ? assets.sun_icon : assets.moon_icon} alt="icon" className='w-6 cursor-pointer'/></button>
                <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50' href="#contact">Contact<Image className='w-3' src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt='icon'/></a>
                <button onClick={openMenu} className='block md:hidden ml-3'><Image src={isDark ? assets.menu_white : assets.menu_black} alt="icon" className='w-6 cursor-pointer'/></button>
              </div>

              <ul ref={styleRef} className='md:hidden flex flex-col  gap-4 lg:gap-8 px-10 fixed -right-64 w-64 top-0 bottom-0 z-50 h-screen py-20 bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                 <button onClick={closeMenu} className='absolute top-6 right-6'><Image src={isDark ? assets.close_white : assets.close_black} alt="icon" className='w-5 cursor-pointer'/></button>
                 <li><a onClick={closeMenu} className='font-ovo' href="#top">Home</a></li>
                 <li><a onClick={closeMenu} className='font-ovo' href="#about">About me</a></li>
                 <li><a onClick={closeMenu} className='font-ovo' href="#services">Services</a></li>
                 <li><a onClick={closeMenu} className='font-ovo' href="#works">My works</a></li>
                 <li><a onClick={closeMenu} className='font-ovo' href="#contact">Contact me</a></li>
              </ul>
            </nav> 
        </>
    );
};

export default Navbar;