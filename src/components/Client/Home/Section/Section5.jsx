import React from "react";
import { HomeSection5Items, HomeSection5Items1 } from "../../../../Utils/temp";
import { useData } from "../../../../Context/DataProviders";
import { Link } from "react-router-dom";

const Section5 = () => {
  const { Products } = useData();

  return (
    <div className="flex flex-col py-9">
      <div>
        <h3 className="content-style text-center py-10">
          Thiết kế - thi công nội thất
        </h3>
        <div className="flex d:gap-16 p:gap-3 justify-center items-center d:flex-row p:flex-col">
          {Products?.filter(
            (item) => item.parentType === "Thiết kế - Thi công nội thất"
          )
            .slice(0, 4)
            .map((items) => (
              <Link to={`/post/${items.id}`}>
                <div className="w-[278px] h-[255px] shadow-xl hover:shadow-2xl cursor-pointer">
                  <div className="w-full overflow-hidden">
                    <img
                      src={items.image}
                      alt="card"
                      className="hover:scale-110 duration-300 w-full h-[180px]"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-center truncate2   ">
                      {items.content}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div>
        <h3 className="content-style text-center py-10">Thi công xây dựng</h3>
        <div className="flex d:gap-16 p:gap-3 justify-center items-center d:flex-row p:flex-col">
          {Products?.filter((item) => item.parentType === "Thi công xây dựng")
            .slice(0, 4)
            .map((items) => (
              <Link to={`/post/${items.id}`}>
                <div className="w-[278px] h-[255px] shadow-xl hover:shadow-2xl cursor-pointer">
                  <div className="w-full overflow-hidden">
                    <img
                      src={items.image}
                      alt="card"
                      className="hover:scale-110 duration-300 w-full h-[180px]"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-center truncate2   ">
                      {items.content}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
