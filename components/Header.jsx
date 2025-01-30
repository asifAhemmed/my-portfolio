import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl h-screen mx-auto flex flex-col items-center justify-center gap-4 text-center">
            <motion.div
            initial={{  scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness:100 }}
            >
                <Image src={assets.profile_img} alt="profile" className='rounded-full w-32 h-32'/>
            </motion.div>
            <motion.h3
            initial={{ y:-20, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.6, delay:0.5 }}
            className='flex items-end gap-2 text-xl font-ovo md:text-2xl mb-3'>Hi! I'm Asif Ahemmed <Image src={assets.hand_icon} alt="icon" className='w-6'/></motion.h3>
            <motion.h1
             initial={{ y:-30, opacity: 0 }}
             whileInView={{y:0,  opacity: 1 }}
             transition={{ duration: 0.8, delay:0.5 }}
            className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">frontend web developer based in Bangladesh</motion.h1>
            <motion.p 
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ duration: 0.6, delay:0.7 }}
            className="mx-w-2xl mx-auto font-ovo">I'm a frontend web developer with a passion for creating visually stunning and user-friendly websites.</motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                initial={{ y:30, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 0.6, delay:1 }}
                className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 dark:bg-transparent border border-white" href="#contact">contact me <Image src={assets.right_arrow_white} alt="icon" className='w-4'/></motion.a>
                <motion.a 
                initial={{ y:30, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 0.6, delay:1.2 }}
                href="/sample.pdf" download className="px-10 py-3 border border-gray-500 rounded-full bg-white flex items-center gap-2 dark:text-black">my resume <Image src={assets.download_icon} alt="icon" className='w-4'/></motion.a>
            </div>
        </div>
    );
};

export default Header;