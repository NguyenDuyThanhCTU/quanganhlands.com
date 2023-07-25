import React, { useState } from "react";
import DropDown from "../Item/DropDown";
import Clock from "./Clock/Clock";
import { useData } from "../../../Context/DataProviders";
import { HeaderDropDownItems } from "../../../Utils/item";

const Header = () => {
  const { HeaderAdmin } = useData();

  return (
    <div className=" h-[7vh] bg-Blue3D font-LexendDeca text-white flex w-full">
      <div className="flex justify-between w-full mx-10 items-center relative ">
        <div className="flex gap-32 cursor-pointer">
          <div className="flex items-center">
            <div className="group relative ">
              <img
                src={HeaderAdmin?.photoURL}
                alt="logo"
                className="w-12 h-12 inline-block object-cover rounded-full "
              />
              <div className="absolute right-[-115px] top-[75px] hidden  group-hover:block ">
                <DropDown ItemDropDown={HeaderDropDownItems} />
              </div>
            </div>

            <p className="inline-block ml-3">{HeaderAdmin?.displayName}</p>
          </div>
        </div>

        <div className="cursor-pointer flex gap-20 ">
          <div>
            <p className="hover:scale-110 duration-300 ">
              <Clock />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
