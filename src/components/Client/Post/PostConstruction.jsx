import React, { useEffect, useState } from "react";
import { useData } from "../../../Context/DataProviders";
import { Link, useParams } from "react-router-dom";

const PostConstruction = () => {
  const { Products } = useData();
  const { id } = useParams();
  const [Filter, setFilter] = useState("");
  const [SortItem, setSortItem] = useState([]);

  useEffect(() => {
    if (id === "tram-dien") {
      setFilter("Trạm điện");
    } else if (id === "biet-thu") {
      setFilter("Biệt Thự");
    } else if (id === "nha-dan") {
      setFilter("Nhà Dân");
    } else if (id === "khach-san") {
      setFilter("Khách Sạn");
    }
  }, [id]);

  useEffect(() => {
    const sort = Products.filter(
      (items) => items.parentType === "Thi công xây dựng"
    );
    console.log(sort);
    if (sort) {
      const sort1 = sort.filter((items) => items.type === Filter);
      console.log(sort1, Filter);

      if (sort1) {
        setSortItem(sort1);
      }
    }
  }, [id, Products, Filter]);
  return (
    <div className="w-full flex justify-center py-10 font-LexendDeca">
      <div className="w-[960px] flex flex-col gap-5">
        {SortItem?.map((items, idx) => (
          <Link to={`/post/${items.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostConstruction;
