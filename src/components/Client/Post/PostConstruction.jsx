import React, { useEffect, useState } from "react";
import { useData } from "../../../Context/DataProviders";
import { useParams } from "react-router-dom";

const PostConstruction = () => {
  const { Products } = useData();
  const { id } = useParams();
  const [Filter, setFilter] = useState("");

  useEffect(() => {
    if (id === "tram-dien") {
      setFilter("Trạm điện");
    } else if (id === "biet-thu") {
      setFilter("Biệt Thự");
    } else if (id === "nha-dan") {
      setFilter("Nhà dân");
    } else if (id === "khach-san") {
      setFilter("Khách sạn");
    }
  }, [id]);
  return (
    <div className="w-full flex justify-center py-10 font-LexendDeca">
      <div className="w-[960px] flex flex-col gap-5">
        {Products.filter((item) => {
          return (
            item.parentType === "Thi công xây dựng" && item.type === Filter
          );
        }).map((items, idx) => (
          <div className="flex gap-5 py-5 border-b-2">
            <div className="flex-1 h-[270px]">
              <img
                src={items.image}
                alt="post"
                className="h-full object-cover w-full"
              />
            </div>
            <div className="flex-1 gap-5 flex-col flex">
              <div>
                <h3 className="font-bold ">{items.title}</h3>
                <div className="w-[150px] h-[2px] bg-black mt-2"></div>
              </div>
              <p className="text-[#747474] text-[14px]">{items.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostConstruction;
