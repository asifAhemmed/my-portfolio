"use client";
import { useState } from "react";
import { motion } from "motion/react";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2370c600-d629-415f-bac4-c3a76c37fcc4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}

    id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{ opacity: 0,y:-20 }}
      whileInView={{ opacity: 1,y:0 }}
      transition={{ duration: 0.5,delay:0.3 }}
      className="text-center mb-2 text-lg font-ovo">Connect with me</motion.h4>
      <motion.h2
      initial={{ opacity: 0,y:-20 }}
      whileInView={{ opacity: 1,y:0 }}
      transition={{ duration: 0.5,delay:0.5 }}
      className="text-center text-5xl font-ovo">Get in touch</motion.h2>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mb-12  text-center mt-5 mx-auto max-w-2xl font-ovo">
        I'd love to hear from you! If you have any question, comments, or feedback, please use the form below. 
      </motion.p>
      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      onSubmit={onSubmit} className="max-w-2xl mx-auto" action="">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <motion.input
            initial={{x:-50, opacity: 0 }}
            whileInView={{x:0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" type="text" name="name" id="name" placeholder="Enter your name" required/>
            <motion.input
            initial={{x:50, opacity: 0 }}
            whileInView={{x:0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" type="email" name="email" id="email" placeholder="Enter your email" required/>
        </div>
        <motion.textarea
        initial={{y:100, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"  rows={6} name="message" id="message" placeholder="Enter your message" required></motion.textarea>
        <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        type="submit" className="px-8 py-3 w-max flex items-center justify-center gap-2 text-white bg-black/80 mx-auto rounded-full hover:bg-black duration-500
        dark:bg-transparent  dark:border-[0.5px] dark:hover:bg-darkHover" >Submit now</motion.button>
      </motion.form>
      <p className="text-center mt-10">{result}</p>
    </motion.div>
  );
};

export default Contact;
