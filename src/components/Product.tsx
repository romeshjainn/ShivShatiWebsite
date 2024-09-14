import React from 'react';

import { CourseCard } from '../comp/courseCard';
import { cardData, cardData2 } from "../data/cardData";
import config from '../config/index.json';
import style from 'styled-jsx/style';
import { CourseCard2 } from '../comp/courseCard2';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <div id="product">
      <h1 className="text-[#ec4755] text-center text-[2rem] my-2 font-bold  ">
        Courses We Offer
      </h1>
      {/* <div className="p-6 flex gap-6 justify-center flex-wrap"> */}
      <div className="p-4">
        <div className="flex flex-col items-center  justify-center sm:flex-row gap-2 pr-8">
          <>
            {cardData?.map((item, index) => (
              <div
                key={index}
                style={{
                  marginTop:
                    index === 1 ? "1.2rem" : index === 2 ? "1.2rem" : "0",
                }}
              >
                <CourseCard data={item} />
              </div>
            ))}
          </>
        </div>

        <div className="mt-8 flex flex-col items-center  justify-center sm:flex-row gap-2 pr-8">
          <>
            {cardData2?.map((item, index) => (
              <div
                key={index}
                style={{
                  marginTop:
                    index === 1 ? "1.2rem" : index === 2 ? "1.2rem" : "0",
                }}
              >
                <CourseCard data={item} />
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Product;
