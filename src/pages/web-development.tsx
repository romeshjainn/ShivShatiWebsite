import Link from "next/link";

const Aws = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="data:image/png;base64,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"
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
            Here’s a description for a web development course that you can use:
            Explore the fundamentals of web development and build a strong
            foundation in creating modern, responsive, and dynamic websites.
            This comprehensive course covers essential topics including HTML,
            CSS, JavaScript, and popular frameworks like React and Node.js.
            You'll gain practical experience in front-end and back-end
            development, learn best practices for web design, and understand how
            to deploy and maintain web applications. Ideal for beginners and
            those looking to enhance their skills, this course provides hands-on
            projects and real-world scenarios to help you become a proficient
            web developer.
          </p>
          <p className="text-xl text-gray-800 mb-6">
            Duration: 8 weeks | Level: Intermediate | Certification: Yes
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Enroll now and take your web development skills to the sky.
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
