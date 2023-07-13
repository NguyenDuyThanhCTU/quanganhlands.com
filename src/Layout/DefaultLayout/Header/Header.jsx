import React, { useState } from "react";
import { HeaderItems } from "../../../Utils/Item";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./DropDown/DropDown";

const Header = () => {
  const [Search, setSearch] = useState(false);
  const [isSelected, setSelected] = useState(0);
  const [Hidden, setHidden] = useState(false);

  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-Roboto  bg-white  shadow-lg">
        <div className="p:hidden p-2 d:flex items-end justify-center gap-56 cursor-pointer">
          <div className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quanganhlands-24c46.appspot.com/o/img%2FfullLogo.png?alt=media&token=928702d9-7802-419f-a466-fa107e068acb"
              alt="img"
              className="h-[100px]"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              {HeaderItems.map((items, idx) => (
                <div
                  className={`uppercase mb-5 cursor-pointer font-bold text-[15px] : relative group ${
                    isSelected === idx && "text-MainColor"
                  }`}
                  onClick={() => {
                    setSelected(idx);
                  }}
                >
                  <Link to={items.link}>
                    {" "}
                    <span className="">{items.name}</span>
                  </Link>
                  <div className="bg-black absolute w-[200px] mt-2 group-hover:block hidden  duration-300 z-10">
                    {items.dropdown &&
                      items.dropdown.map((items) => (
                        <div className="border-y text-white p-2 text-[14px] shadow-xl">
                          <span className=""> {items.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[20px] relative hover:scale-105 duration-300">
              <BiSearch
                onClick={() => {
                  setSearch(!Search);
                }}
              />
              {Search && (
                <div className="absolute text-[15px] right-0 mt-2 z-0">
                  <div className="border bg-white 0">
                    <div className="py-1 px-2 flex">
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="outline-none border border-gray-600 px-2"
                      />
                      <div className="bg-black text-white w-[85px] p-2">
                        <span className="p02">Tìm kiếm</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p:block d:hidden ">
          <div className="justify-between mx-5 flex">
            <div className="py-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quanganhlands-24c46.appspot.com/o/img%2FfullLogo.png?alt=media&token=928702d9-7802-419f-a466-fa107e068acb"
                alt="logo"
                className="w-48"
              />
            </div>
            <div>
              <div className="flex items-center text-[60px]">
                {Hidden ? (
                  <RxCross1
                    className=" text-black p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className=" text-black p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              Hidden ? "h-screen" : "h-0 "
            } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden `}
          >
            {HeaderItems.map((items) => (
              <DropDown
                content={items.name}
                link={items.link}
                setHidden={setHidden}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
