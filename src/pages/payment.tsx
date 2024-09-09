import { useState, useRef, useEffect } from "react";
import { uploadFile } from "../firebase/firebaseStorage";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Payment = () => {
  const [utrCode, setUtrCode] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const [name, setName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      setName(userName);
    } else {
      router.push("/registration");
    }
  }, []);

  const handleUtrChange = (e) => {
    setUtrCode(e.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setScreenshot(event.target.files[0]);
    }
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!utrCode || !screenshot) {
      alert("Please fill in the UTR code and upload a screenshot.");
      return;
    }

    try {
      const fileUrl = await uploadFile(screenshot); // Use your uploadFile function
      console.log("Uploaded file URL:", fileUrl);
      const sheetId = "https://sheetdb.io/api/v1/63660arc3rjxl";

      const response = await fetch(sheetId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          utr: utrCode,
          payment_screenshot: fileUrl,
        }),
      });

      toast.success(`Thank You ${name}, We Will Get Back To You Soon`);
      router.push("/");

      console.log("response: ", response);

      // You can now send the UTR code and file URL to your backend or handle it as needed
      console.log("UTR Code:", utrCode);
      console.log("File URL:", fileUrl);

      // Optionally: Send UTR code and file URL to backend here
    } catch (error) {
      console.error("Error submitting payment details:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-[50%] my-4 w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Make a Payment
        </h1>

        <div className="mb-6 flex flex-col gap-4 items-center justify-center">
          <img
            src="/payment-qrcode.jpeg"
            alt="QR Code for Payment"
            className="w-48 h-48 object-cover"
          />
          <img
            src="/paywith.jpeg"
            alt="QR Code for Payment"
            className="object-contain w-1/2"
          />
        </div>

        <p className="text-lg text-gray-600 mb-6">
          After successful payment, enter the UTR code and upload the payment
          screenshot. We will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label
              htmlFor="utrCode"
              className="block font-medium text-gray-700 mb-2"
            >
              UTR Code:
            </label>
            <input
              type="text"
              id="utrCode"
              value={utrCode}
              onChange={handleUtrChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter UTR code"
              required
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="screenshot"
              className="block font-medium text-gray-700 mb-2"
            >
              Payment Screenshot:
            </label>
            <input
              accept="image/*"
              type="file"
              id="screenshot"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit Payment Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
