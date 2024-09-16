import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col  justify-center px-[3%]  BG">
  {/* <div className=" flex md:justify-between justify-center w-full px-10 links">
    <ul className="flex space-x-1">
      <li className="pt-[100px] px-[10px] pb-[10px] bg-zinc-800 hover-slide-down"><a href=""> <FaFacebookF /></a></li>
      <li className="pt-[100px] px-[10px] pb-[10px] bg-zinc-800 hover-slide-down"><a href=""> <FaTwitter /></a></li>
      <li className="pt-[100px] px-[10px] pb-[10px] bg-zinc-800 hover-slide-down"><a href=""> <FaLinkedinIn /></a></li>
      <li className="pt-[100px] px-[10px] pb-[10px] bg-zinc-800 hover-slide-down"><a href=""> <FaInstagram /></a></li>
 
    </ul>
  </div> */}

      <main className="text-center mt-20" data-aos="fade-right">
        <h1 className="md:text-6xl text-3xl font-bold mb-4 coustard-regular hover:text-purple-600 transition-colors duration-300 ease-in-out">LAYERBRIDGE</h1>
        <p className="md:text-2xl text-lg md:mb-4 mb-2 coustard-regular">
          One stop <span className="text-purple-600">SHOP</span> for your IT
          needs!
        </p>
        {/* <p className="mb-3 text-white max-w-5xl text-base">
          Your one-stop shop for your IT needs, providing comprehensive
          solutions to streamline your business operations and enhance your
          technological infrastructure. We specialize in a wide array of
          services designed to meet the diverse needs of modern enterprises.
        </p> */}
        <p className="text-[12px]">
        <a href="" className="bg-purple-600 py-3 px-5 rounded-md inline-block tracking-wide open-sans">
          <span>CLOUD SERVICES</span> | <span>CYBERSECURITY</span> |{" "}
          <span>NETWORKING</span> | <span>IT SUPPORT</span> |{" "}
          <span>HARDWARE SOLUTIONS</span> | <span>AUTOMATION AND AI</span>
        </a>
        </p>
      
      </main>

      <div className="flex justify-between items-center text-white mt-auto md:flex-row flex-col md:gap-0 gap-5 md:mb-0 mb-5">
        <div className="text-sm" >
          <p>Need assistance? We’re here for you: services@layerbridge.com</p>
          <p>© LayerBridge SRL – J40/9776/2013 – RO32101070</p>
        </div>
        <div className="capitalize md:text-[26px] text-xl coustard-regular hover:text-purple-600 transition-colors duration-300 ease-in-out">
          <h2 className="md:ml-8 ml-0">IT Solutions</h2>
          <h2 > For your needs</h2>
          <hr  className="mt-2"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
