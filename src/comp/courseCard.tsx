import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const CourseCard = ({ data }: { data: any }) => {
  const router = useRouter();

  const handleDemoClick = () => {
    localStorage.setItem("calendarlyLink", data?.bookADemo);
    setTimeout(() => {
      router.push("/book-demo");
    }, 1000);
  };

  return (
    <div className="cards mr-4 w-full shadow-lg rounded-lg overflow-hidden relative bg-white">
      <div>
        <div className="relative">
          <img
            src={data.img}
            alt="Course Image"
            className="w-full h-[220px] rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xl font-medium text-gray-700">
              {data.title}
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </div>
          </div>
          <Link href={data?.route}>
            <a className="text-gray-600">
              {data.description} .....{" "}
              <span className="text-[#ec4755]">Read More</span>
            </a>
          </Link>
          <div className="text-gray-600 font-semibold flex flex-col gap-2 mt-4 text-[1.1rem]">
            <p>Duration : {data.duration}</p>
            <p>
              Old Price :
              <span className="line-through text-red-500 ml-1">
                Rs. {data.oldPrice}
              </span>
              <span className="ml-2">New Price :</span>
              <span className="text-blue-500 ml-1">Rs. {data.newPrice}</span>
            </p>
            <p className="text-yellow-600">
              Offer Valid Till <span>30 Sep, 2024</span>
            </p>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <Link href="/purchase">
              <a className="inline-block bg-[#ec4755] text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Buy Now
              </a>
            </Link>
            <button
              onClick={handleDemoClick}
              className="inline-block bg-[#ec4755] text-white font-semibold py-2 px-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Book A Demo
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </div>
            <div className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 .75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
