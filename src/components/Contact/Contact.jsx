import React from "react";
import Input from "./Input.jsx/Input";

const Contact = () => {
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
        <div>
          <div>
            <h3 className="content-style">liên hệ với chúng tôi</h3>
            <div className="flex flex-col gap-3 my-3">
              <strong>Văn phòng:</strong>
              <p>
                Căn 28, Tầng 19, Tòa S201, Vinhomes Smart City, Tây Mỗ – Đại Mỗ,
                Nam Từ Liêm, Hà Nội
              </p>

              <p>
                <strong>Hotline:</strong> 0961.614.526
              </p>
              <p>
                <strong>Website:</strong>
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
