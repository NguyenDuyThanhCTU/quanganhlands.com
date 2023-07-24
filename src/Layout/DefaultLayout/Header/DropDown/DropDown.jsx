import React, { useState } from "react";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = ({ content, link, setHidden }) => {
  return (
    <div className="p-4 bg-white ">
      <div className=" border-t border-gray-200 flex justify-between pt-5 items-center mx-5">
        <Link
          to={link}
          onClick={() => {
            setHidden(false);
          }}
        >
          <h3 className="text-[20px] font-normal">{content}</h3>
        </Link>
      </div>
      z
    </div>
  );
};

export default DropDown;
