import { assets } from "@/assets/assets";
import Image from "next/image";


const Footer = ({isDark}) => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.my_logo} alt="logo" className="w-32 mx-auto mb-2"/>
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt="mail-icon" className="w-6"/>
                    asifahemmed0@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 py-6 mt-12 mx-[10%]">
                <p>© 2025 Asif Ahemmed. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="">GitHub</a></li>
                    <li><a target="_blank" href="">LinkedIn</a></li>
                    <li><a target="_blank" href="">Twitter</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;