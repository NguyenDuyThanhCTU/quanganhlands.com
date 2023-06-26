import React from "react";
import { HomeSection5Items1 } from "../../Utils/Temp";

const Construction = () => {
  return (
    <div className="mx-80">
      <h3 className="content-style text-center py-10">Thi công xây dựng</h3>
      <div className="grid grid-cols-4 gap-5 ">
        {HomeSection5Items1.map((items) => (
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
  );
};

export default Construction;
