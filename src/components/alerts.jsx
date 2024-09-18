// Toast.js
import React from 'react';

const Toast = ({ type, message, onClose }) => {
  const colors = {
    success: 'bg-green-100 text-green-500',
    error: 'bg-red-100 text-red-500',
    warning: 'bg-orange-100 text-orange-500',
  };

  return (
    <div className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${colors[type]}`} role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        {/* Example icon for success */}
        {type === 'success' && <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" /></svg>}
        {/* Example icon for error */}
        {type === 'error' && <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" /></svg>}
        {/* Example icon for warning */}
        {type === 'warning' && <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" /></svg>}
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" onClick={onClose} aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>
      </button>
    </div>
  );
};

export default Toast;






{/* <>
      <Loader loading={loading} />
      <div className="min-h-screen justify-self-center grid xl:gap-6 grid-cols-12 lg:p-4 md:p-6 bg-[#fffcf5]">
        <div className="col-span-12 lg:col-start-2 lg:col-span-10 justify-self-center grid gap-2 md:grid-cols-11">
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

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="col-span-0 lg:justify-self-end text-center relative order-first md:order-none">
            <div className="h-[604px] top-[47px] md:p-0 m-5">
              <div className="lg:w-[417px] md:w-[320px] sm:w-[500px] w-[400px] h-[604px] left-0 top-0 absolute bg-[#2b2b2b] rounded-[10px] border-8 border-[#17c3b2]" />
              <div className="lg:w-[354px] md:w-[320px] w-[360px] h-[174px] xl:text-5xl lg:text-3xl md:text-xl text-4xl justify-self-center lg:left-[31px] top-[300px] absolute">
                <span className="text-[#ffcb77] font-bold font-['Inter']">
                  #1{' '}
                </span>
                <span className="text-white font-bold font-['Inter']">
                  Framework to Craft Your Value Prop
                </span>
              </div>
              <div className="w-[292px] h-[79px] lg:left-[60px] md:left-[15px] left-[50px] top-[100px] absolute text-center text-white lg:text-[21px] md:text-[18px] font-semibold font-['Inter']">
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
              <div className="w-[82px] h-6 lg:left-[167px] md:left-[120px] left-[160px] top-[560px] absolute text-center text-white text-base font-normal font-['Inter']">
                VOL 1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </> */}