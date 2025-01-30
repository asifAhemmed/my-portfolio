import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-ovo">My services</h2>
            <p className="mb-12  text-center mt-5 mx-auto max-w-2xl font-ovo">
            I am a experienced frontend developer with a over decade of
            professional expertise in the field. Throughout my carrier, I have
            had the privilege of collaborating with prestigious organizations,
            contribution to their success growth.
          </p>
          <div className="grid grid-cols-auto gap-6 my-10">
            {
                serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className="border border-gray-400 px-8 py-12 rounded-lg hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500">
                        <Image src={icon} alt={title} className="w-10" />
                        <h3 className="my-4 text-lg text-gray-700">{title}</h3>
                        <p className="text-gray-600 text-sm leading-5">{description}</p>
                        <a className="flex items-center gap-2 text-sm mt-5" href={link}>Read more <Image src={assets.right_arrow} alt="icon" className='w-4'/></a>
                    </div>))
            }
          </div>
        </div>
    );
};

export default Services;