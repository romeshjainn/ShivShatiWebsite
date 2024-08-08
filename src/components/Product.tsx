import React from 'react';

import { CourseCard } from '../comp/courseCard';
import { cardData } from "../data/cardData";
import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <div id='product'>
      <h1 className="text-[#ec4755] text-center text-[2rem] my-4 font-bold  ">
        Courses We Offer
      </h1>
      <div className="p-6 flex gap-6 justify-center flex-wrap">
        {cardData?.map((item, index) => (
          <CourseCard key={index} data={item} />
        ))}
      
      </div>
    </div>
  );
};

export default Product;
