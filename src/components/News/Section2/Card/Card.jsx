import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, date, type, title, content, link }) => {
  return (
    <Link to={link}>
      <div className="bg-white hover:shadow-2xl rounded-2xl w-[366px]">
        <div className="relative">
          <img
            src={image}
            alt="img"
            className="w-full object-contain rounded-t-2xl"
          />
          <div className="absolute p-4 bg-white top-0 right-0 rounded-bl-2xl rounded-tr-2xl uppercase font-bold">
            {type}
          </div>
        </div>

        <div className="py-6 px-5 flex  flex-col gap-3 justify-start">
          <div>
            <p className="text-[14px]">{date}</p>
            <h3 className="text-[24px]">{title}</h3>
          </div>
          <p className="font-thin   truncate-webkit ">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
