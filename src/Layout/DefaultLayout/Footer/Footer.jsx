import React, { useState } from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { notification } from "antd";

const Footer = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

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
      <div className="relative font-Roboto">
        <img
          src="https://qhomedecor.vn/wp-content/themes/noithatskyhope/lib/images/bg-footer.png"
          alt="footer"
          className="w-screen"
        />
        <div className="flex  gap-56 justify-center py-5 absolute w-full top-5">
          <div>
            <h3 className="uppercase text-[25px] text-greenMain font-bold">
              Địa chỉ
            </h3>
            <div>
              <div className="flex gap-1 items-center">
                <IoLocation />{" "}
                <p>
                  <strong>Địa chỉ: </strong>
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
                  <strong>Hotline: </strong>{" "}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <TfiMapAlt />{" "}
                <p>
                  <strong>Google map:</strong>{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-[25px] mb-4 text-greenMain font-bold">
              Đăng ký tư vấn ngay
            </h3>
            <div className="flex flex-col items-end gap-10 w-full">
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
                className="cursor-pointer px-10 py-3  bg-greenMain text-white"
                onClick={() => HandleSubmit()}
              >
                Đăng ký
              </div>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-[25px] text-greenMain font-bold">
              Liên hệ
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
