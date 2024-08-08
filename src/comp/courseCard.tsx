import { useEffect } from "react";

export const CourseCard = ({data}:{data:any}) => {

  useEffect(() => {
    console.log(data, "item");
  },[])
  return (
    <div className="max-w-[30%] shadow-lg rounded-lg overflow-hidden relative bg-white">
      <div className="relative">
        <img
          // src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          // src="data:image/png;base64,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"
          src={data.img}
          alt="ui/ux review check"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        {/* <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button> */}
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xl font-medium text-gray-700">{data.title}</div>
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
        <div className="text-gray-600">
          {data.description} .....{" "}
          <span className="text-[#ec4755]">Read More</span>
        </div>
        <div className="text-gray-600 font-semibold mt-4 text-[1.1rem]">
          Duration : {data.duration}
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
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
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
                d="M3.25 3.75A.75.75 0 014 3h16a.75.75 0 01.75.75v14.5a.75.75 0 01-.75.75H4a.75.75 0 01-.75-.75V3.75zM4.5 5.5v13h15V5.5H4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
