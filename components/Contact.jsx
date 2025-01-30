"use client";
import { useState } from "react";


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
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="mb-12  text-center mt-5 mx-auto max-w-2xl font-ovo">
        I'd love to hear from you! If you have any question, comments, or feedback, please use the form below. 
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto" action="">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="text" name="name" id="name" placeholder="Enter your name" required/>
            <input className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="email" name="email" id="email" placeholder="Enter your email" required/>
        </div>
        <textarea className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"  rows={6} name="message" id="message" placeholder="Enter your message" required></textarea>
        <button type="submit" className="px-8 py-3 w-max flex items-center justify-center gap-2 text-white bg-black/80 mx-auto rounded-full hover:bg-black duration-500" >Submit now</button>
      </form>
      <p className="text-center mt-10">{result}</p>
    </div>
  );
};

export default Contact;
