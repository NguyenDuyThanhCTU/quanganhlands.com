import React from "react";
import ListProducts from "./Section/ListProducts";

const Product = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <h3 className=" text-[44px] text-center font-bold mb-2 uppercase ">
          Thông tin bài viết
        </h3>
        <ListProducts name="Thêm bài viết" />
      </div>
    </div>
  );
};

export default Product;
