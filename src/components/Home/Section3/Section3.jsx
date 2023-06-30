import React from "react";
import { useData } from "../../../Context/DataProviders";
import moment from "moment";
const Section3 = () => {
  const { HomePosts } = useData();

  return (
    <>
      <div className=" py-9">
        <h3 className="content-style text-center mb-4">
          CHÚNG TÔI GIÚP GÌ ĐƯỢC CHO BẠN?
        </h3>
        <div className="">
          <div className="p-2 d:flex-row p:flex-col flex justify-center gap-10">
            {HomePosts.slice(0, 3).map((items) => {
              const formattedDate = moment
                .unix(items.createdAt.seconds)
                .format("MMMM DD, YYYY");
              return (
                <>
                  <div className="d:w-[380px] h-[425px] flex flex-col justify-start hover:shadow-2xl shadow-xl cursor-pointer  rounded-xl">
                    <img
                      src={items.image}
                      alt="image"
                      className="w-[380px]  rounded-t-xl"
                    />
                    <div className="p-4">
                      <p>{formattedDate}</p>
                      <h3 className="content-style ">{items.title}</h3>
                      <p className="truncate5 ">{items.content} </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
