import React from "react";
import { HomeSection5Items, HomeSection5Items1 } from "../../../Utils/Temp";

const Section5 = () => {
  return (
    <div className="flex flex-col py-9">
      <div>
        <h3 className="content-style text-center py-10">
          Thiết kế - thi công nội thất
        </h3>
        <div className="flex gap-16 justify-center">
          {HomeSection5Items.slice(0, 4).map((items) => (
            <div className="w-[278px]">
              <div className="w-full overflow-hidden">
                <img
                  src={items.image}
                  alt="card"
                  className="hover:scale-110 duration-300"
                />
              </div>
              <h3 className="font-bold text-center  p-2">{items.content}</h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="content-style text-center py-10">
          Thiết kế - thi công nội thất
        </h3>
        <div className="flex gap-16 justify-center">
          {HomeSection5Items1.slice(0, 4).map((items) => (
            <div className="w-[278px]">
              <div className="w-full overflow-hidden">
                <img
                  src={items.image}
                  alt="card"
                  className="hover:scale-110 duration-300"
                />
              </div>
              <h3 className="font-bold text-center  p-2">{items.content}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
