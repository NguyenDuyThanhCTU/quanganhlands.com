import React, { useState } from "react";
import { useData } from "../../../../../Context/DataProviders";
import { notification } from "antd";
import { updateDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "../../../../../Context/StateProvider";

const Contact = () => {
  const { setIsRefetch } = useStateProvider();
  const [Data, setData] = useState("");
  const { ContactData } = useData();
  const [isSelected, setSelected] = useState(false);

  const ContactDashboard = [
    {
      name: "Số điện thoại",
      type: "input",
      placeholder: ContactData.phone,
    },
    {
      name: "Gmail",
      type: "input",
      placeholder: ContactData.gmail,
    },
    {
      name: "Địa chỉ",
      type: "textarea",
      placeholder: ContactData.address,
    },
    {
      name: "Vị trí",
      type: "input",
      placeholder: ContactData.location,
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
    <div className="bg-[#353535] text-white d:w-[400px] rounded-xl shadow-xl p:w-auto ">
      <div className="p-4  ">
        <h3 className="text-[25px] text-center ">Thông tin liên hệ</h3>
        <div className="flex flex-col gap-3 mt-5">
          {ContactDashboard.map((items, idx) => {
            let Type = items.type;
            return (
              <>
                <label>{items.name}</label>
                <div className="flex gap-5 p:flex-col d:flex-row w-full">
                  {Type && (
                    <div onClick={() => setSelected(idx)}>
                      <Type
                        placeholder={items.placeholder}
                        type="text"
                        className="px-4 py-2 text-black outline-none rounded-2xl bg-gray-300 d:w-[240px] p:w-full "
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
            src={ContactData.location}
            className="d:w-[300px] d:h-[200px] p:w-[100px] p:h-[100px]"
            width="300"
            height="200"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
