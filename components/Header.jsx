import { assets } from "@/assets/assets";
import Image from "next/image";


const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl h-screen mx-auto flex flex-col items-center justify-center gap-4 text-center">
            <div>
                <Image src={assets.profile_img} alt="profile" className='rounded-full w-32 h-32'/>
            </div>
            <h3 className='flex items-end gap-2 text-xl font-ovo md:text-2xl mb-3'>Hi! I'm Asif Ahemmed <Image src={assets.hand_icon} alt="icon" className='w-6'/></h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">frontend web developer based in Bangladesh</h1>
            <p className="mx-w-2xl mx-auto font-ovo">I'm a frontend web developer with a passion for creating visually stunning and user-friendly websites.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2" href="#contact">contact me <Image src={assets.right_arrow_white} alt="icon" className='w-4'/></a>
                <a href="/sample.pdf" download className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2">my resume <Image src={assets.download_icon} alt="icon" className='w-4'/></a>
            </div>
        </div>
    );
};

export default Header;