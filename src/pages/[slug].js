// pages/[slug].js
import { useRouter } from "next/router";
import Link from "next/link";
import {
  digitalMarketingCover,
  webDevCover,
  pythonFullstackCover,
  javaFullstackCover,
  cardData,
  cardData2,
} from "../data/cardData";
import { useEffect, useState } from "react";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState({})  

  useEffect(() => {
    const getIndexOf = cardData.findIndex((item) => item.route == `/${slug}`);
    if (getIndexOf !== -1) {
      setData(cardData[getIndexOf]);
    } else {
      setData(cardData2[0]);
    }
  }, [slug]);

  useEffect(() => {
    console.log(data, "data")
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={data.img}
            alt="AWS Course"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg text-black mb-6">{data.description}</p>
          <p className="text-xl text-gray-800 mb-6">
            Duration: {data.duration} | Certification: Yes | Job Assitance : Yes
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Enroll now and take your web development skills to the sky.
          </p>
          <Link href="/registration">
            <a className="inline-block bg-[#ec4755] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Enroll Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
