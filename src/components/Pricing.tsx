import React, { useEffect, useState } from "react";

import config from "../config/index.json";

const Pricing = () => {
  const { pricing } = config;
  const [data, setData] = useState({
    name:"",
    number:"",
    email:"",
    message:"",
  })

  const handleMessageInput = (e:any) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    console.log(data, "data");
  }, [data]);

const handleSubmit = async () => {
  const { name, number, email, message } = data;
  console.log(name, number, email, message);

  console.log(
    name.length > 3 &&
      number.length > 9 &&
      email.length > 0 &&
      message.length > 0
  );
  // Adjust validation to >= for minimum length requirements
  if (
    name.length > 3 &&
    number.length > 9 &&
    email.length > 0 &&
    message.length > 0
  ) {
    const sheetId = "https://sheetdb.io/api/v1/4qrmu2rpe3kad";

    try {
      const response = await fetch(sheetId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          email,
          message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data submitted successfully:", result);
        // Handle successful submission, e.g., clear the form
      } else {
        console.error("Error submitting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  } else {
    console.log("Form validation failed. Please check your input.");
  }
};

  return (
    <>
      <div id="pricing" className="hidden md:flex w-full p-4 ">
        <div className="w-1/2 p-8">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="grid place-items-center w-1/2 h-screen">
          <div className="border border-black p-4 flex flex-col gap-4  rounded-2xl">
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Name
              </label>
              <input
                type="text"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="name"
                onChange={handleMessageInput}
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Number
              </label>
              <input
                type="number"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="number"
                onChange={handleMessageInput}
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Email
              </label>
              <input
                type="text"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="email"
                onChange={handleMessageInput}
              />
            </div>

            <div>
              <label htmlFor="" className="font-semibold ">
                What can we help you ?
              </label>
              <textarea
                name="message"
                onChange={handleMessageInput}
                className="border-[1px] px-2 shadow-md min-h-[100px] py-1 mt-1 w-full border-black rounded-md"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#ec4755] font-bold text-white p-1 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="grid  place-items-center w-full">
          <div className="border border-black p-4 flex flex-col gap-4 w-[80%] rounded-2xl">
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Name
              </label>
              <input
                type="text"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="name"
                onChange={handleMessageInput}
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Number
              </label>
              <input
                type="number"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="number"
                onChange={handleMessageInput}
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold ">
                Enter Your Email
              </label>
              <input
                type="text"
                className="border-[1px] px-2 shadow-md py-1 mt-1 w-full border-black rounded-md"
                name="email"
                onChange={handleMessageInput}
              />
            </div>

            <div>
              <label htmlFor="" className="font-semibold ">
                What can we help you ?
              </label>
              <textarea
                name="message"
                onChange={handleMessageInput}
                className="border-[1px] px-2 shadow-md min-h-[100px] py-1 mt-1 w-full border-black rounded-md"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#ec4755] font-bold text-white p-1 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
