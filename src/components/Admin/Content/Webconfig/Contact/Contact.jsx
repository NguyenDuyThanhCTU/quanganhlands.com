import React, { useState } from "react";
import { useData } from "../../../../../Context/DataProviders";
import { notification } from "antd";
import { updateDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../Context/StateProvider";

const Contact = () => {
  const { setIsRefetch } = useStateProvider();
  const [Data, setData] = useState("");
  const { Phone, Gmail, Location, Address } = useData();
  const [isSelected, setSelected] = useState(false);

  const ContactDashboard = [
    {
      name: "Số điện thoại",
      type: "input",
      placeholder: Phone,
    },
    {
      name: "Gmail",
      type: "input",
      placeholder: Gmail,
    },
    {
      name: "Địa chỉ",
      type: "textarea",
      placeholder: Address,
    },
    {
      name: "Vị trí",
      type: "input",
      placeholder: Location,
    },
  ];

  const HandleUpdate = (idx) => {
    if (Data === "") {
      notification["error"]({
        message: "Lỗi !",
        description: ` 
        Vui lòng nhập thông tin trước khi CẬP NHẬT !`,
      });
    } else {
      let newData;
      if (idx === 0) {
        newData = { phone: Data };
      } else if (idx === 1) {
        newData = { gmail: Data };
      } else if (idx === 2) {
        newData = { address: Data };
      } else if (idx === 3) {
        newData = { location: Data };
      }

      updateDocument("website", "Contact", newData).then(() => {
        notification["success"]({
          message: "Thành công !",
          description: `
          Thông tin đã được CẬP NHẬT !`,
        });
        setIsRefetch("contact");
      });
    }
  };

  return (
    <div className="bg-[#353535] text-white w-[400px] rounded-xl shadow-xl">
      <div className="p-4  ">
        <h3 className="text-[25px] text-center ">Thông tin liên hệ</h3>
        <div className="flex flex-col gap-3 mt-5">
          {ContactDashboard.map((items, idx) => {
            let Type = items.type;
            return (
              <>
                <label>{items.name}</label>
                <div className="flex gap-5">
                  {Type && (
                    <div onClick={() => setSelected(idx)}>
                      {" "}
                      <Type
                        placeholder={items.placeholder}
                        type="text"
                        className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 w-[240px] "
                        onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                  )}
                  <div>
                    {isSelected === idx ? (
                      <button
                        className="hover:bg-[#bb86fc37] hover:text-[#BB86FC] text-[#74affc] bg-[#74affc43] px-3 py-2 rounded-xl"
                        onClick={() => HandleUpdate(idx)}
                      >
                        Cập nhật
                      </button>
                    ) : (
                      <button className="text-white bg-gray-400 px-3 py-2 rounded-xl cursor-default">
                        Cập nhật
                      </button>
                    )}
                  </div>
                </div>
              </>
            );
          })}
          <iframe
            src={Location}
            width="300"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
