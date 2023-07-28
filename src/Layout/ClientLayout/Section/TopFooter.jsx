import React from "react";
import { useData } from "../../../Context/DataProviders";

const TopFooter = () => {
  const { ContactData } = useData();
  return (
    <div className=" bg-MainColor ">
      <div className="flex items-center justify-center py-5 d:gap-36 p:gap-3 d:flex-row p:flex-col ">
        <h3 className="text-white font-bold text-[17px]  text-center">
          {" "}
          BẠN CÓ NHU CẦU! HÃY LIÊN HỆ NGAY VỚI CHÚNG TÔI ĐỂ ĐƯỢC TƯ VẤN{" "}
        </h3>
        <div className="text-MainColor bg-yellow-400 d:text-[30px] p:text-[18px] px-4 py-2 rounded-xl uppercase font-bold">
          hotline: {ContactData.phone}
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
