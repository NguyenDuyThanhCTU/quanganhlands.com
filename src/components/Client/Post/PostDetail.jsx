import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { getDocumentById } from "../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../Context/DataProviders";

const PostDetail = () => {
  const [isData, setIsData] = useState();
  const { Products } = useData();

  const { id } = useParams();

  useEffect(() => {
    getDocumentById("products", id).then((data) => {
      setIsData(data);
    });
  }, [id]);

  const DetailPostDate = moment
    .unix(isData?.createdAt.seconds)
    .format("MMMM DD, YYYY");

  // const contentArray = isData?.content.split("\n");

  return (
    <div>
      <div className=" flex mt-10 font-Montserrat gap-10 d:flex-row p:flex-col">
        <div className="flex-[65%]  w-full  flex flex-col d:ml-20 p:mx-2">
          <div className=" pb-5 border-b flex flex-col gap-4">
            <h3 className="text-[#333333] text-[32px] font-light">
              {isData?.title}
            </h3>
            <div className="flex gap-5">
              <div className="uppercase p-1 text-blue-500 border border-blue-500">
                Khác
              </div>
              <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                <AiOutlineClockCircle />
                <p className="">{DetailPostDate}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineUser />
                <p className=""> QuangAnh</p>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div dangerouslySetInnerHTML={{ __html: isData?.content }} />
            {/* <p className="mt-3 font-LexendDeca font-light">{isData?.content}</p> */}
          </div>
          <div className="pb-10">
            <img src={isData?.image} alt="post detail image" />
          </div>
        </div>

        <div className="flex-[35%] mx-2">
          <h3 className="text-[#666666] text-[24px]">Tin Phổ biến</h3>
          {Products?.map((items, idx) => {
            const formattedDate = moment
              .unix(items.createdAt.seconds)
              .format("MMMM DD, YYYY");

            return (
              <Link to={`/news/${items.id}`}>
                <div
                  className={`flex items-center  cursor-pointer border-b ${
                    idx === 0 ? "pb-10" : "py-10"
                  }`}
                >
                  <div className="flex-[30%] h-[155px]">
                    <img
                      src={items.image}
                      alt="postsimage"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pl-6 flex flex-col gap-2 flex-[70%]">
                    <h3>{items.title}</h3>
                    <div className="flex items-center gap-1 text-gray-400">
                      <AiOutlineClockCircle />
                      <p className="">{formattedDate}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
