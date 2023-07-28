import React from "react";
import Input from "./Item/Input";
import { useData } from "../../../Context/DataProviders";

const Contact = () => {
  const { ContactData } = useData();
  return (
    <div className=" py-10 ">
      <div className="p-2 flex justify-center gap-5 p:flex-col d:flex-row">
        <div>
          <img
            src="https://qhomedecor.vn/wp-content/uploads/2020/10/img-lienhe.png"
            alt="img"
            className="w-[685px]"
          />
        </div>
        <div className="d:w-[500px] p:w-auto">
          <div>
            <h3 className="content-style">liên hệ với chúng tôi</h3>
            <div className="flex flex-col gap-3 my-3">
              <strong>Văn phòng:</strong>
              <p>{ContactData.address}</p>

              <p>
                <strong>Hotline:</strong> {ContactData.phone}
              </p>
              <p>
                <strong>Website:</strong> www.quanganhlands.com
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Input placeholder="Họ Tên(*)" />
              <Input placeholder="Email(*)" />
              <Input placeholder="Điện thoại(*)" />
              <textarea
                placeholder="Ý kiến khách hàng"
                className="outline-none border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <span className="uppercase py-2 px-6 bg-MainColor text-white">
                gửi đi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
