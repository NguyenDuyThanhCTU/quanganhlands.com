import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ image, title, link }) => {
  return (
    <div className=" bg-white w-[90%] h-[400px] rounded-2xl shadow-lg ">
      <Link to={link}>
        <div>
          <img src={image} alt="img" className="rounded-t-2xl w-[368px]" />
        </div>
        <h3 className="text-[24px] font-bold py-6 px-4">{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
