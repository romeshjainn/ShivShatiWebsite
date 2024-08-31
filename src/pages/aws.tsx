import Link from "next/link";

const Aws = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src= "data:image/png;base64,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"
            alt="AWS Course"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            AWS Mastery Course
          </h1>
          <p className="text-lg text-black mb-6">
            Dive deep into AWS services and learn how to leverage the cloud to
            build scalable, reliable, and high-performance applications. This
            comprehensive course covers everything from the basics to advanced
            techniques, providing you with hands-on experience and practical
            knowledge.
          </p>
          <p className="text-xl text-gray-800 mb-6">
            Duration: 6 Months | Level: Intermediate | Certification: Yes
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Enroll now and take your cloud skills to the next level with our
            expertly designed AWS course.
          </p>
          <Link href="/purchase">
            <a className="inline-block bg-[#ec4755] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aws;
