import Link from "next/link";

const PurchasePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Secure Your Spot
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Ready to take the next step? Complete your purchase now to gain full
            access to the course and enhance your skills. The payment process is
            secure and straightforward.
          </p>
          <p className="text-xl text-gray-800 mb-6">
            Duration: 6 Months | Level: Intermediate | Certification: Yes
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Your investment in this course will open doors to new opportunities
            and skills. Don’t miss out on this chance to advance your career.
          </p>
          {/* Placeholder for payment gateway integration */}
          <div
            onClick={() =>
              window.alert("Payment gateway integration is upcoming.")
            }
          >
            <a className="inline-block bg-[#ec4755] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
