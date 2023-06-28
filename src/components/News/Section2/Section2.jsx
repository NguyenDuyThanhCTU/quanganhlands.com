import React, { useState } from "react";
import Card from "./Card/Card";
import { NewsSection2 } from "../../../Utils/Item";
import { NewsSection2Card } from "../../../Utils/Temp";
const Section2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="relative ">
      <div className="flex flex-col   top-16  w-full items-center gap-16">
        <div className="flex justify-between w-full p:pr-0 d:pr-16 d:flex-row p:flex-col">
          <h3 className="text-[48px]">
            <strong>Thông tin</strong> mới nhất
          </h3>
          <div className="text-[#68737a] flex italic gap-3 cursor-pointer">
            {NewsSection2.map((items, idx) => (
              <div>
                <a
                  className={`d:px-5 p:px-3 py-3 rounded-3xl  ${
                    isSelected === idx ? "bg-[#1b365d] text-white " : "bg-white"
                  }`}
                  onClick={() => setIsSelected(idx)}
                >
                  {items.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="d:grid grid-cols-3 gap-0 w-full p:flex flex-col items-center">
          {NewsSection2Card.slice(0, 3).map((items) => (
            <>
              <Card
                image={items.image}
                date={items.date}
                type={items.type}
                title={items.title}
                content={items.content}
                link={items.link}
              />
            </>
          ))}
        </div>
        <div className="font-bold bg-redPrimmary hover:scale-110 duration-300 hover:shadow-2xl  text-white w-[150px] rounded-3xl py-3 px-6 ">
          Xem chi tiết
        </div>
      </div>
    </div>
  );
};

export default Section2;
