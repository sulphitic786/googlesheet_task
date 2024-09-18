import React, { useState } from "react";
import axios from "axios";

import Loader from "./loader";
import { pdfUrl, fileURL } from "../utils/constants";

const index = () => {
  const [formData, setFormData] = useState({ Name: "", Email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData?.Name && formData?.Email) {
      setLoading(true);
      try {
        const res = await axios.post(fileURL, formData, {
          headers: {
            "Content-Type": "application/json", // Ensure JSON content type
          },
          withCredentials: false, // Explicitly prevent sending credentials
        });

        console.log("res", res);
        setFormData({ Name: "", Email: "" })
        setLoading(false);
        openPDF();
        alert("Data saved successfully!");
      } catch (error) {
        console.error("Error saving data", error);
        setLoading(false);
        alert("Failed to save data.");
      }
    } else {
      alert("Name and email is mandatory.");
    }
  };

  const openPDF = () => {
    window.open(pdfUrl); // This opens the PDF in a new tab
  };

  return (
    <>
      <Loader loading={loading} />
      <div className="min-h-screen justify-self-center grid xl:gap-6 grid-cols-12 lg:p-4 md:p-6 bg-[#fffcf5]">
        {/* Main Content - Offset by 1 column on both sides, spans 10 columns */}
        <div className="col-span-12 lg:col-start-2 lg:col-span-10 justify-self-center grid gap-2 md:grid-cols-11">
          {/* First Section */}
          <div className="col-span-6 md:col-span-6 relative md:p-0 p-5">
            <div>
              <div className="xl:h-[116px] xl:text-5xl lg:text-3xl text-4xl text-center top-[50px]">
                <span className="text-[#ffcb77] font-bold font-['Inter']">
                  #1
                </span>
                <span className="text-[#2b2539] font-bold font-['Inter']">
                  {" "}
                  Framework to Craft Your Value Prop
                </span>
              </div>

              <div className="text-gray-700 xl:text-xl lg:text-lg font-bold font-['Inter'] relative">
                This is designed for
                <span className="h-6 bg-[#ffcb77]/30 border-l-2 mx-1 border-[#ffcb77]">
                  early-stage founders
                </span>
                to craft a value prop that drives traction.
              </div>

              <div className="relative my-3">
                <div className="xl:w-[581px] mb-1 left-0 top-0 text-gray-700 xl:text-xl lg:text-lg font-bold font-['Inter']">
                  In this first volume we’ll address:
                </div>
                <div className="xl:w-[510px] ms-5 top-[32px]">
                  <span className="text-[#17c3b2] xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {" "}
                    Key questions you must answer <br />
                  </span>
                  <span className="text-[#17c3b2] xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {" "}
                    Structure secrets <br />
                  </span>
                  <span className="text-[#17c3b2] xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 xl:text-xl lg:text-lg font-semibold font-['Inter']">
                    {" "}
                    Breakdowns & examples
                  </span>
                </div>
              </div>

              <div className="xl:w-[611px] top-[375px] text-black xl:text-xl lg:text-lg font-normal font-['Inter']">
                This is the framework I use with SMBs to craft value props that
                sell—it's the only resource you'll need.
              </div>
              <div className="xl:w-[521px] my-2 text-black xl:text-xl lg:text-lg font-normal font-['Inter']">
                Just hit the button, and the guide is yours immediately!
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Input field for First Name */}
                  <div>
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="Your First Name"
                      className="w-full h-[46px] p-2.5 rounded-lg border border-[#d9d9d9] text-gray-700/50 text-xl font-semibold outline-none bg-transparent"
                    />
                  </div>

                  {/* Input field for Email Address */}
                  <div>
                    <input
                      type="email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className="w-full h-[46px] p-2.5 rounded-lg border border-[#d9d9d9] text-gray-700/50 text-xl font-semibold outline-none bg-transparent"
                    />
                  </div>
                </div>

                <button className="w-full 2xl:w-[500px] h-[85px] mt-6 bg-[#17c3b2] rounded-lg shadow border border-[#2b2b2b] ease-in-out hover:bg-[#14a89e] hover:text-white text-black text-2xl font-bold flex justify-center items-center">
                  Get it immediately
                </button>
              </form>
            </div>
          </div>

          {/* Second Section */}
          <div className="col-span-0 lg:justify-self-end text-center md:relative order-first md:order-none">
            <div className="md:h-[604px] h-[370px] top-[47px] md:p-0 m-5">
              <div className="md:h-[604px] h-[370px] xl:w-[465px] lg:w-[345px] md:w-[320px] sm:w-[500px] w-[415px] left-0 top-0 absolute bg-[#2b2b2b] rounded-[10px] border-8 border-[#17c3b2]" />
              <div className="xl:w-[354px] lg:w-[280px] md:w-[300px] w-[360px] h-[174px] xl:text-5xl lg:text-3xl md:text-1xl text-3xl justify-self-center lg:left-[31px] xl:left-[45px] md:top-[300px] top-[170px] absolute">
                <span className="text-[#ffcb77] font-bold font-['Inter']">
                  #1{' '}
                </span>
                <span className="text-white font-bold font-['Inter']">
                  Framework to Craft Your Value Prop
                </span>
              </div>
              <div className="w-[292px] h-[79px] xl:left-[80px] lg:left-[25px] md:left-[15px] left-[65px] md:top-[100px] top-[30px] absolute text-center text-white lg:text-[21px] md:text-[18px] font-semibold font-['Inter']">
                <span className="relative z-10 lg:top-[10px] top-[20px]">
                  Dedicated <br /> to Early-Stage Founders
                </span>
                <svg
                  className="absolute inset-0 z-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 100"
                >
                  <ellipse
                    cx="150"
                    cy="50"
                    rx="145"
                    ry="45"
                    fill="none"
                    stroke="#ffcb77"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="w-[82px] h-6 xl:left-[190px] lg:left-[140px] md:left-[120px] left-[170px] md:top-[560px] top-[335px] absolute text-center text-white text-base font-normal font-['Inter']">
                VOL 1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
