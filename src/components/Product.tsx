import React from 'react';

import { CourseCard } from '../comp/courseCard';
import { cardData } from "../data/cardData";
import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <div id="product">
      <h1 className="text-[#ec4755] text-center text-[2rem] my-2 font-bold  ">
        Courses We Offer
      </h1>
      {/* <div className="p-6 flex gap-6 justify-center flex-wrap"> */}
      <div className='p-4'>

      <div className="flex flex-col items-center  justify-center sm:flex-row gap-2 pr-8">
        {cardData?.map((item, index) => (
          <CourseCard key={index} data={item} />
        ))}
      </div>
        </div>
    </div>
  );
};

export default Product;
