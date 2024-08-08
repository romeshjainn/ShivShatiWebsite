import React from "react";

import config from "../config/index.json";

const Pricing = () => {
  const { pricing } = config;

  return (
    // <section className={`bg-background py-8`} id="pricing">
    //   <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
    //     <h1
    //       className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
    //     >
    //       {title}
    //     </h1>
    //     <div className={`w-full mb-4`}>
    //       <div
    //         className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
    //       ></div>
    //     </div>
    //     <div
    //       className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
    //     >
    //       <div
    //         className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
    //       >
    //         <div
    //           className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
    //         >
    //           <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
    //             {firstPlan?.name}
    //           </div>
    //           <ul className={`w-full text-center text-sm`}>
    //             {firstPlan?.features.map((feature) => (
    //               <li
    //                 className={`border-b py-4`}
    //                 key={`${firstPlan.name}-${feature}`}
    //               >
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div
    //           className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
    //         >
    //           <div
    //             className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
    //           >
    //             {firstPlan?.price}
    //             <span className={`text-base`}> {firstPlan?.priceDetails}</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
    //       >
    //         <div
    //           className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
    //         >
    //           <div className={`w-full p-8 text-3xl font-bold text-center`}>
    //             {secondPlan?.name}
    //           </div>
    //           <div
    //             className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
    //           ></div>
    //           <ul className={`w-full text-center text-base font-bold`}>
    //             {secondPlan?.features.map((feature) => (
    //               <li
    //                 className={`border-b py-4`}
    //                 key={`${secondPlan?.name}-${feature}`}
    //               >
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div
    //           className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
    //         >
    //           <div className={`w-full pt-6 text-4xl font-bold text-center`}>
    //             {secondPlan?.price}
    //             <span className={`text-base`}> {secondPlan?.priceDetails}</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
    //       >
    //         <div
    //           className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
    //         >
    //           <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
    //             {thirdPlan?.name}
    //           </div>
    //           <ul className={`w-full text-center text-sm`}>
    //             {thirdPlan?.features.map((feature) => (
    //               <li
    //                 className={`border-b py-4`}
    //                 key={`${thirdPlan?.name}-${feature}`}
    //               >
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div
    //           className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
    //         >
    //           <div
    //             className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
    //           >
    //             {thirdPlan?.price}
    //             <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div id="pricing" className="flex w-full p-4 ">
      <div className="w-1/2 p-8">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="grid place-items-center w-1/2 h-screen">
        <div className="border border-black p-4 flex flex-col gap-4 w-[80%] rounded-2xl">
          <div>
            <label htmlFor="" className="font-semibold ">
              Enter Your Name
            </label>
            <input
              type="text"
              className="border-2 py-1 mt-1 w-full border-black rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold ">
              Enter Your Number
            </label>
            <input
              type="text"
              className="border-2 py-1 mt-1 w-full border-black rounded-md"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold ">
              Enter Your Email
            </label>
            <input
              type="text"
              className="border-2 py-1 mt-1 w-full border-black rounded-md"
            />
          </div>

          <div>
            <label htmlFor="" className="font-semibold ">
              What can we help you ?
            </label>
            <textarea className="border-2 min-h-[100px] py-1 mt-1 w-full border-black rounded-md" />
          </div>
          <button className="bg-[#ec4755] font-bold text-white p-1 rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
