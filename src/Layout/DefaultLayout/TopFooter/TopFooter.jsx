import React from "react";

const TopFooter = () => {
  return (
    <div className="h-[100px] bg-greenMain">
      <div className="flex items-center justify-center h-full gap-36 ">
        <h3 className="text-white font-bold text-[17px]">
          {" "}
          BẠN CÓ NHU CẦU! HÃY LIÊN HỆ NGAY VỚI CHÚNG TÔI ĐỂ ĐƯỢC TƯ VẤN{" "}
        </h3>
        <div className="text-greenMain bg-yellow-400 text-[30px] px-4 py-2 rounded-xl uppercase font-bold">
          hotline: 0961.614.526
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
