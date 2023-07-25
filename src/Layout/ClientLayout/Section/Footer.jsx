import React, { useState } from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { notification } from "antd";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const { ContactData } = useData();

  const HandleSubmit = () => {
    if (!Name || !Email || !Phone) {
      notification["error"]({
        message: "Lỗi !",
        description: `
        vui lòng nhập ĐẦY ĐỦ thông tin !`,
      });
    } else {
      notification["success"]({
        message: "Thành công !",
        description: `
        Cảm ơn !`,
      });
      setName("");
      setEmail("");
      setPhone("");
    }
  };
  return (
    <>
      <div className=" font-Roboto">
        <div className=" py-5  w-full top-5 footer-bg">
          <div className="p-2 d:flex-row p:flex-col flex p:gap-5 d:gap-56 justify-center">
            <div>
              <h3 className="uppercase text-[25px] text-MainColor font-bold">
                Địa chỉ
              </h3>
              <div>
                <div className="flex gap-1 items-center">
                  <IoLocation />{" "}
                  <p>
                    <strong>Địa chỉ: </strong> {ContactData.address}
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <CgWebsite />{" "}
                  <p>
                    <strong>Website:</strong> quanganhlands.com
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <BsFillTelephoneFill />{" "}
                  <p>
                    <strong>Hotline: </strong>
                    {ContactData.phone}
                  </p>
                </div>
                <div>
                  <div className="flex gap-1 items-center">
                    <TfiMapAlt />{" "}
                    <p>
                      <strong>Google map:</strong>{" "}
                    </p>
                  </div>
                  <iframe
                    src={ContactData.location}
                    width="300"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-[25px] mb-4 text-MainColor font-bold">
                Đăng ký tư vấn ngay
              </h3>
              <div className="flex flex-col p:items-start d:items-end gap-5 w-full">
                <div className="flex gap-4 flex-col">
                  <>
                    <input
                      type="text"
                      className="py-2 px-2 bg-gray-700 outline-none  w-[273px] text-white"
                      placeholder="Họ và tên*"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </>
                  <>
                    <input
                      type="text"
                      className="py-2 px-2 bg-gray-700 outline-none  w-[273px] text-white"
                      placeholder="Email*"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </>
                  <>
                    <input
                      type="text"
                      className="py-2 px-2 bg-gray-700 outline-none  w-[273px] text-white"
                      placeholder="Điện thoại*"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </>
                </div>

                <div
                  className="cursor-pointer px-10 py-2  bg-MainColor text-white"
                  onClick={() => HandleSubmit()}
                >
                  Đăng ký
                </div>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-[25px] text-MainColor font-bold">
                Liên hệ
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center px-2 text-[14px] font-poppins font-normal py-5 bg-black text-white font-LexendDeca">
          <p className="pr-2">©2023 All Rights reserved ADS Company</p>
          <p className="pl-2 border-l-[1px] border-gray-400">
            Designed by Thanh Dev ADS Company
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
