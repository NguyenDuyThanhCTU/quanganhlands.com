import React from "react";
import { HomeSection4Items } from "../../../../Utils/item";

const Section4 = () => {
  return (
    <div className="relative py-10">
      <div className="bg-[rgba(0,0,0,0.5)] Home-bg1  flex flex-col items-center text-white top-0 p-2">
        <h3 className="py-7 uppercase font-bold text-[25px] text-center">
          Quy trình thi công nội thất chuẩn của Quang Anh
        </h3>
        <div className="flex d:gap-20 p:gap-5 mb-5">
          {HomeSection4Items.map((items, idx) => (
            <div className="group relative">
              <div className=" scale-50 group-hover:scale-100 duration-500 ">
                <img src={items.outline} alt="img" className="w-[212px]" />
              </div>
              <p className="text-center py-3 text-[20px]">Bước {idx + 1}</p>
              <div className=" absolute top-0 group-hover:scale-0 duration-300">
                <img src={items.image} alt="img" />
              </div>
            </div>
          ))}
        </div>
        <p className="py-14 border-t d:mx-96 p:mx-0">
          Với khát khao chinh phục đỉnh cao bằng sự chuyên nghiệp, uy tín, chúng
          tôi sẽ không ngừng sáng tạo, phấn đấu, học hỏi để tự hoàn thiện với
          mục tiêu phát triển doanh nghiệp một cách bền vững. Công ty TNHH Đầu
          tư xây dựng nội thất Quang Anh Lands cung cấp cho khách hàng Quy trình
          thiết kế thi công hoàn thiện nội thất trọn gói. Tất cả các sản phẩm
          đều được kiểm tra kỹ từng chi tiết trước khi bàn giao đến tay khánh
          hàng.
        </p>
      </div>
    </div>
  );
};

export default Section4;
