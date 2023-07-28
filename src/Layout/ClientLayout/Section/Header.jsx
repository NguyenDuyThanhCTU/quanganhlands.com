import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { HeaderItems } from "../../../Utils/item";
import DropDown from "../Item/DropDown";
import { useData } from "../../../Context/DataProviders";

const Header = () => {
  const [Search, setSearch] = useState(false);
  const [isSelected, setSelected] = useState(0);
  const [Hidden, setHidden] = useState(false);
  const { TradeMarkData } = useData();

  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-Roboto  bg-MainColor  shadow-lg">
        <div className="p:hidden p-2 d:flex items-end justify-center gap-56 cursor-pointer">
          <div className="">
            <Link to="/">
              <img
                src={TradeMarkData.websiteLogo}
                alt="img"
                className="h-[100px]"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              {HeaderItems.map((items, idx) => (
                <div
                  className={`uppercase mb-5 cursor-pointer text-white font-bold text-[15px] : relative group ${
                    isSelected === idx && "text-yellow-600"
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
                        <Link
                          to={`${
                            items.type === 1
                              ? `/construction${items.link}`
                              : `/designs${items.link}`
                          }`}
                        >
                          <div className="border-y text-white p-2 text-[14px] shadow-xl hover:text-yellow-500">
                            <span className=""> {items.name}</span>
                          </div>
                        </Link>
                      ))}
                    <div className="absolute -top-3 w-full h-5 bg-none"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[20px] relative hover:scale-105 duration-300">
              <BiSearch
                onClick={() => {
                  setSearch(!Search);
                }}
                className="text-white hover:text-yellow-600"
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
              <Link to="/">
                <img
                  src={TradeMarkData.websiteLogo}
                  alt="logo"
                  className="w-16"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center text-[60px]">
                {Hidden ? (
                  <RxCross1
                    className=" text-white p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className=" text-white p-2 "
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
                dropdown={items.dropdown}
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
