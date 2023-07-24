import React from "react";

const PostConstruction = () => {
  return (
    <div className="flex  justify-center">
      <div className=" flex items-center gap-5 py-5 border-b w-[963px]">
        <div>
          <img
            src="https://qhomedecor.vn/wp-content/uploads/2020/03/3-13.jpg"
            alt="post img"
            className="h-[205px] w-[435px] object-cover"
          />
        </div>
        <div className="w-[508px] font-LexendDeca">
          <div>
            <h3 className="font-semibold text-[15px]">
              Thi công biệt thư sân vườn kiểu mẫu tại Đà Lạt
            </h3>
            <div className="h-[2px] w-[150px] rounded-full bg-black mt-1"></div>
          </div>
          <p className="font-light truncate5 mt-3">
            Biệt thụ hiên đang là xu thế phát triển mà mọi người hướng tới khi
            muốn xây dựng tổ ấm cho riêng mình. Nắm bắt xu thế theo nhu cầu
            khách hàng, chúng tôi xin giới thiệu đến quý khách hàng mẫu biệt thự
            sân vườn đẹp ở Đà Lạt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostConstruction;
