import React, { useState } from "react";
import axios from "axios";

const index = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData", formData);

    // Replace with your Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbyTE_tdO05PuHpDbnnLc2K8F9zJEATvvM3-n0whkTCilw7ZJfuA-vSTNjhsnMONeTTEqQ/exec";

    try {
      await axios.post(scriptURL, formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure JSON content type
        },
        withCredentials: false  // Explicitly prevent sending credentials
      });
      
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data', error);
      alert('Failed to save data.');
    }
};


  return (
    <>
      <div className="min-h-screen grid gap-6 grid-cols-12 p-4 bg-[#fffcf5]">
        {/* Main Content - Offset by 1 column on both sides, spans 10 columns */}
        <div className="col-start-2 col-span-10 grid gap-6 md:grid-cols-10">
          {/* First Section */}
          <div className="col-span-10 md:col-span-6 relative">
            <div>
              <div className="h-[116px] top-[47px]">
                <span className="text-[#ffcb77] text-5xl font-bold font-['Inter']">
                  #1
                </span>
                <span className="text-[#2b2539] text-5xl font-bold font-['Inter']">
                  {" "}
                  Framework to Craft Your Value Prop
                </span>
              </div>

              <div className="text-gray-700 text-xl font-bold font-['Inter'] relative">
                This is designed for
                <span className="h-6 bg-[#ffcb77]/30 border-l-2 mx-1 border-[#ffcb77]">
                  early-stage founders
                </span>
                to craft a value prop that drives traction.
              </div>

              <div className="relative my-3">
                <div className="w-[581px] mb-1 left-0 top-0 text-gray-700 text-xl font-bold font-['Inter']">
                  In this first volume we’ll address:
                </div>
                <div className="w-[510px] ms-2 top-[32px]">
                  <span className="text-[#17c3b2] text-xl font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 text-xl font-semibold font-['Inter']">
                    {" "}
                    Key questions you must answer <br />
                  </span>
                  <span className="text-[#17c3b2] text-xl font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 text-xl font-semibold font-['Inter']">
                    {" "}
                    Structure secrets <br />
                  </span>
                  <span className="text-[#17c3b2] text-xl font-semibold font-['Inter']">
                    {"->"}
                  </span>
                  <span className="text-gray-700 text-xl font-semibold font-['Inter']">
                    {" "}
                    Breakdowns & examples
                  </span>
                </div>
              </div>

              <div className="w-[611px] top-[375px] text-black text-xl font-normal font-['Inter']">
                This is the framework I use with SMBs to craft value props that
                sell—it's the only resource you'll need.
              </div>
              <div className="w-[521px] my-2 text-black text-xl font-normal font-['Inter']">
                Just hit the button, and the guide is yours immediately!
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Input field for First Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your First Name"
                      className="w-full h-[46px] p-2.5 rounded-lg border border-[#d9d9d9] text-gray-700/50 text-xl font-semibold outline-none bg-transparent"
                    />
                  </div>

                  {/* Input field for Email Address */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className="w-full h-[46px] p-2.5 rounded-lg border border-[#d9d9d9] text-gray-700/50 text-xl font-semibold outline-none bg-transparent"
                    />
                  </div>
                </div>

                <button className="w-full md:w-[500px] h-[85px] mt-6 bg-[#17c3b2] rounded-lg shadow border border-[#2b2b2b] text-black text-2xl font-bold flex justify-center items-center">
                  Get it immediately
                </button>
              </form>
            </div>
          </div>

          {/* Second Section */}
          <div className="col-span-10 md:col-span-4 relative order-first md:order-none">
            <div className="w-[417px] h-[604px] top-[47px]">
              <div className="w-[417px] h-[604px] left-0 top-0 absolute bg-[#2b2b2b] rounded-[10px] border-8 border-[#17c3b2]" />
              <div className="w-[354px] h-[174px] left-[31px] top-[300px] absolute">
                <span className="text-[#ffcb77] text-5xl font-bold font-['Inter']">
                  #1
                </span>
                <span className="text-white text-5xl font-bold font-['Inter']">
                  Framework to Craft Your Value Prop
                </span>
              </div>
              <div className="w-[292px] h-[79px] left-[82px] top-[118px] absolute text-center text-white text-[21px] font-semibold font-['Inter']">
                <span className="relative z-10 top-[10px]">
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
              <div className="w-[82px] h-6 left-[167px] top-[560px] absolute text-center text-white text-base font-normal font-['Inter']">
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
