import React from "react";
import { HomeSection3CarsItem } from "../../../Utils/Temp";

const Section3 = () => {
  return (
    <>
      <div className=" py-9">
        <h3 className="content-style text-center mb-4">
          CHÚNG TÔI GIÚP GÌ ĐƯỢC CHO BẠN?
        </h3>
        <div className="">
          <div className="p-2 d:flex-row p:flex-col flex justify-center gap-10">
            {HomeSection3CarsItem.map((items) => (
              <>
                <div className="d:w-[380px] h-[425px] flex flex-col justify-between">
                  <div>
                    <h3 className="content-style ">{items.content}</h3>
                    <p>{items.title}</p>
                  </div>
                  <img src={items.image} alt="image" className="w-[380px]" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
