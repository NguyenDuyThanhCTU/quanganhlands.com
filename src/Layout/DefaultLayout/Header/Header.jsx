import React, { useState } from "react";
import { HeaderItems } from "../../../Utils/Item";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  const [Search, setSearch] = useState(false);
  const [isSelected, setSelected] = useState(0);

  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-Roboto  bg-white  shadow-lg">
        <div className="p-2 flex items-end justify-center gap-56 cursor-pointer">
          <div className="">
            <img src="./logo.png" alt="img" className="h-[100px]" />
            <h3 className=" font-bold text-[17px]  text-green-600 uppercase">
              {" "}
              Quang Anh Lands
            </h3>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              {HeaderItems.map((items, idx) => (
                <div
                  className={`uppercase mb-5 cursor-pointer font-bold text-[15px] : relative group ${
                    isSelected === idx && "text-greenMain"
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
      </div>
    </>
  );
};

export default Header;
