import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4 
            initial={{ opacity: 0,y:-20 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ duration: 0.5,delay:0.3 }}
            className="text-center mb-2 text-lg font-ovo">What I offer</motion.h4>
            <motion.h2
            initial={{ opacity: 0,y:-20 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ duration: 0.5,delay:0.5 }}
            className="text-center text-5xl font-ovo">My services</motion.h2>
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-12  text-center mt-5 mx-auto max-w-2xl font-ovo">
            I am a experienced frontend developer with a over decade of
            professional expertise in the field. Throughout my carrier, I have
            had the privilege of collaborating with prestigious organizations,
            contribution to their success growth.
          </motion.p>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid grid-cols-auto gap-6 my-10">
            {
                serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={index} className="border border-gray-400 px-8 py-12 rounded-lg hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <Image src={icon} alt={title} className="w-10" />
                        <h3 className="my-4 text-lg text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-gray-600 text-sm leading-5 dark:text-white/80">{description}</p>
                        <a className="flex items-center gap-2 text-sm mt-5" href={link}>Read more <Image src={assets.right_arrow} alt="icon" className='w-4'/></a>
                    </motion.div>))
            }
          </motion.div>
        </motion.div>
    );
};

export default Services;