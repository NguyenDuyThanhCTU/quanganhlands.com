import React, { useRef, useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Empty, notification } from "antd";

import ListSlide from "./ListSlide/ListSlide";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { addDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { FaCloudUploadAlt } from "react-icons/fa";

const Section = ({ name, type }) => {
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState(false);
  const [Data, setData] = useState();
  const [selected, setSelected] = useState(false);
  const { setIsRefetch } = useStateProvider();

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `img/slide/${selectImage.name}`);

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };
  setTimeout(() => {
    setError(false);
  }, 3000);

  const HandleUpdate = () => {
    const data = {
      image: `${imageUrl ? imageUrl : Data}`,
    };

    addDocument("slide", data).then(() => {
      notification["success"]({
        message: "Thành công !",
        description: `
        Thông tin đã được CẬP NHẬT !`,
      });
      setIsRefetch("personal title");
      setSelected(false);
      setImageUrl();
    });
  };

  return (
    <div className=" rounded-xl">
      <div className="p-4 flex gap-5 border flex-col">
        <div className="flex items-center justify-start gap-2 ">
          <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
          <h3 className="text-[24px] font-normal uppercase text-center">
            {name}
          </h3>
        </div>
        <div className="flex gap-5">
          <div className="grid grid-cols-2 gap-10 cursor-pointer  h-[550px]  p-5 border">
            <div className="shadow-2xl bg-[#353535] h-[300px] hover:shadow-gray-700 duration-300">
              <div className="w-[480px] h-[320px]">
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Chọn hình ảnh để tải lên
                      </p>
                    </div>
                    <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                      Định dạng jpg hoặc png <br />
                    </p>
                    <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Chọn từ thiết bị
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    className="w-0 h-0"
                    onChange={(e) => uploadImage(e)}
                  />
                </label>
              </div>
              <div className=" ml-3 ">
                <h3 className="py-3 text-[25px] font-bold ">
                  Thay đổi hình ảnh
                </h3>
                <div className="mb-5 flex  items-center gap-2">
                  <div onClick={() => setSelected(true)} className="w-full">
                    <input
                      type="text"
                      placeholder="Nhập liên kết hình ảnh"
                      className="py-3 px-4 text-black  border rounded-full outline-none w-full  "
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                    Vui lòng chọn đúng định dạng
                  </p>
                )}
              </div>
              {selected || imageUrl ? (
                <div className="mt-5">
                  <div
                    className="text-center  uppercase py-2 border mx-2 bg-purple hover:bg-purpleAdmin hover:text-purpleHover hover:border-purpleHover text-blueAdmin border-blueAdmin block group-hover:hidden"
                    onClick={() => HandleUpdate(0)}
                  >
                    Cập nhật
                  </div>
                </div>
              ) : (
                <div className="text-center uppercase py-2 border mx-2 bg-purple  text-gray-400 border-gray-400 block ">
                  Cập nhật
                </div>
              )}
            </div>
            <div className="shadow-2xl bg-[#353535] h-auto hover:shadow-gray-700 duration-300">
              <div className="w-[480px] h-[320px]">
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-[467px] h-full object-cover"
                    />
                  </>
                ) : (
                  <div className="text-white  bg-w w-full">
                    <Empty
                      imageStyle={{ height: 60 }}
                      description={
                        <span className="text-white">
                          Hình ảnh chưa được tải lên
                        </span>
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <ListSlide />
        </div>
      </div>
    </div>
  );
};

export default Section;
