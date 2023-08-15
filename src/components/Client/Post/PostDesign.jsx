import React, { useEffect, useState } from "react";
import { useData } from "../../../Context/DataProviders";
import { Link, useParams } from "react-router-dom";

const PostDesign = () => {
  const { Products } = useData();
  const { id } = useParams();
  const [Filter, setFilter] = useState("");
  const [SortItem, setSortItem] = useState([]);
  useEffect(() => {
    if (id === "chung-cu") {
      setFilter("Chung cư");
    } else if (id === "biet-thu") {
      setFilter("Biệt Thự");
    } else if (id === "nha-dan") {
      setFilter("Nhà dân");
    } else if (id === "shop") {
      setFilter("Shop");
    } else if (id === "van-phong") {
      setFilter("Văn Phòng");
    } else if (id === "khach-san") {
      setFilter("Khách sạn");
    }
  }, [id]);

  useEffect(() => {
    const sort = Products.filter(
      (items) => items.parentType === "Thiết kế - Thi công nội thất"
    );
    if (sort) {
      const sort1 = sort.filter((items) => items.type === Filter);
      if (sort1) {
        setSortItem(sort1);
      }
    }
  }, [id, Products]);

  console.log(Filter, SortItem);

  return (
    <div className="w-full flex justify-center py-10 font-LexendDeca">
      <div className="w-[960px] flex flex-col gap-5">
        {SortItem?.map((items, idx) => (
          <Link to={`/post/${items.id}`}>
            {" "}
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

export default PostDesign;
