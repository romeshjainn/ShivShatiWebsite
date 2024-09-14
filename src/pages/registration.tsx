import React, { useEffect, useState } from "react";
import { sendMobileOtp, verifyMobileOtp } from "../api/otp";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import course from "next-seo/lib/jsonld/course";

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });


  
  const handleChange = (e:any) => {
    const {value, name} = e.target
    console.log(e.target.value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sheetId = "https://sheetdb.io/api/v1/63660arc3rjxl";

    try {
      const response = await fetch(sheetId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
        }),
      });
      console.log("response: ", response);

      if (isMobileVerified) {
        router.push("/payment");
        localStorage.setItem("name", formData.name);
      } else {
        console.log("Please Verify Mobile Number");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState("");
  const [isMobileVerified, setIsMobileVerfied] = useState(false);

  const router = useRouter();

  const requestMobileOtp = async () => {
    toast.loading("Requesting Otp");
    try {
      setShowOtpInput(true);

      const response = await sendMobileOtp(formData.phone);
      if (response.orderId) {
        setOtpId(response.orderId);
        console.log(response, "response");
        toast.dismiss();
        toast.success("Otp Sent Successfully");
      } else {
        toast.dismiss();
        toast.success("Otp Request Failed");
        setShowOtpInput(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOtp = async () => {
    toast.loading("Verifying Otp");

    try {
      const response = await verifyMobileOtp(formData.phone, otpId, otp);
      if (response.success) {
        toast.dismiss();
        toast.success("Otp Verified Successfully");
        setIsMobileVerfied(true);
        setShowOtpInput(false);
      } else {
        toast.dismiss();
        toast.success("Otp Verifification Failed");
        setIsMobileVerfied(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center p-2 justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md w-full  sm:max-w-[40%]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Register for a Course
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={isMobileVerified}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your phone number"
              required
            />
            {!isMobileVerified ? (
              <button
                onClick={() => {
                  formData.phone.length == 10 &&
                    !showOtpInput &&
                    requestMobileOtp();
                }}
                style={{
                  background:
                    formData.phone.length == 10 && !showOtpInput
                      ? "#6366f1"
                      : "gray",
                }}
                className=" w-[30%] text-white font-semibold  rounded-[.3rem]"
              >
                Verify
              </button>
            ) : (
              <button className=" w-[30%] text-white font-semibold bg-green-600 rounded-[.3rem]">
                Verified
              </button>
            )}
          </div>
        </div>

        {showOtpInput && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Enter Otp
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your phone number"
                required
              />
              <button
                onClick={() => otp.length == 4 && handleVerifyOtp()}
                className="bg-[#6366f1] w-[30%] text-white font-semibold  rounded-[.3rem]"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="course">
            Select Course
          </label>
          <select
            name="course"
            id="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          >
            <option value="" disabled>
              -- Select a course --
            </option>
            <option value="Java">Java</option>
            <option value="python">Python</option>
            <option value="react-js">React JS</option>
            <option value="java-fullstack">Java Fullstack</option>
            <option value="python-fullstack">Python Fullstack</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="dsa">
              Data Science / Analytics
            </option>
            <option value="web-dev">Web Development</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CourseRegistrationForm;
