import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = ({ content, link, setHidden, dropdown }) => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="p-4 bg-white ">
      <div className=" border-t border-gray-200 items-start justify-between pt-5  mx-5 flex flex-col">
        <Link to={link} className="w-full">
          <div className="flex items-center justify-between w-full">
            <h3
              className="text-[20px] font-normal"
              onClick={() => {
                setHidden(false);
              }}
            >
              {content}
            </h3>{" "}
            {dropdown.length > 0 && (
              <AiFillCaretDown onClick={() => setIsSelected(!isSelected)} />
            )}
          </div>
        </Link>
        {dropdown.length > 0 && (
          <div
            className={`flex flex-col  overflow-hidden duration-300 gap-2 mt-2 ml-2 ${
              isSelected ? "h-0" : "h-[150px]"
            }`}
          >
            {dropdown.map((items, idx) => (
              <>
                <Link to={`/construction${items.link}`}>
                  <div
                    onClick={() => {
                      setHidden(false);
                    }}
                  >
                    {items.name}
                  </div>
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
