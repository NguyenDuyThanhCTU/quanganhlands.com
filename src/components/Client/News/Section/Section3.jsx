import React from "react";

import {
  NewsSection3CardBot,
  NewsSection3CardTop,
} from "../../../../Utils/temp";
import Card from "../Item/Card";

const Section3 = () => {
  return (
    <div className="relative py-20">
      <div className=" pb-[100px]   flex flex-col items-start">
        <div className="p-2">
          <h3 className="text-[48px]">
            <strong>Quang Anh</strong> đồng hành <br />
            cùng bạn!
          </h3>
          <p className="text-[18px] py-5">Tin tức phù hợp với bạn</p>
        </div>
        <div className="d:grid grid-cols-3 gap-10 p:flex flex-col items-center  ">
          {NewsSection3CardTop.slice(0, 3).map((items) => (
            <>
              <Card image={items.image} title={items.title} link={items.link} />
            </>
          ))}
        </div>
      </div>

      <div className=" flex flex-col items-end ">
        <div className="p-2">
          <h3 className="text-[48px]">
            <strong>Dễ dàng tìm kiếm</strong>
            <br />
            theo yêu cầu của bạn
          </h3>
          <p className="text-[18px] py-5">Tin tức phù hợp với bạn</p>
        </div>
        <div className="d:grid grid-cols-3 gap-10 p:flex flex-col items-center">
          {NewsSection3CardBot.slice(0, 3).map((items) => (
            <>
              <Card image={items.image} title={items.title} link={items.link} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
