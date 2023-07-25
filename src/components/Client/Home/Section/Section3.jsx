import React from "react";
import moment from "moment";
import { useData } from "../../../../Context/DataProviders";
import { HomeSection3CarsItem } from "../../../../Utils/temp";
const Section3 = () => {
  return (
    <>
      <div className=" py-9">
        <h3 className="content-style text-center mb-4">
          CHÚNG TÔI GIÚP GÌ ĐƯỢC CHO BẠN?
        </h3>
        <div className="">
          <div className="p-2 d:flex-row p:flex-col flex justify-center gap-10">
            {HomeSection3CarsItem.slice(0, 3).map((items) => (
              <div className="w-[380px] flex justify-between flex-col gap-5">
                <div className="flex flex-col  gap-5 justify-between">
                  <h3 className="text-MainColor font-semibold text-[22px]">
                    {items.content}
                  </h3>
                  <p>{items.title}</p>
                </div>
                <img src={items.image} alt="section" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
