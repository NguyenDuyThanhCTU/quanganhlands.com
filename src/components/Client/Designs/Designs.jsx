import React from "react";
import { useData } from "../../../Context/DataProviders";
import { Link } from "react-router-dom";

const Designs = () => {
  const { Products } = useData();

  return (
    <div className="d:mx-80 p:mx-0  ">
      <h3 className="content-style text-center py-10 ">
        thiết kế - Thi công nội thất
      </h3>
      <div className="d:grid grid-cols-4 gap-5 p:flex flex-col items-center">
        {Products.filter((item) => {
          return item.parentType === "Thiết kế - Thi công nội thất";
        }).map((items) => (
          <Link to={`/post/${items.id}`}>
            <div className="w-[278px] ">
              <div className="w-full overflow-hidden h-[180px]">
                <img
                  src={items.image}
                  alt="card"
                  className="hover:scale-110 duration-300 h-[180px] "
                />
              </div>
              <h3 className="font-bold text-center  p-2">{items.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Designs;
