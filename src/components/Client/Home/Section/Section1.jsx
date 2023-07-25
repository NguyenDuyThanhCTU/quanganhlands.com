import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { Slides } = useData();
  return (
    <>
      <div className="relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Slides.map((items) => (
            <>
              <SwiperSlide>
                <img key={items.id} src={items.image} alt="banner" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <div className="text-white bg-[rgba(0,0,0,0.7)] absolute  d:w-[550px] p:w-[250px] p:right-0 d:right-32  z-10 d:bottom-20 p:bottom-0 d:text-[17px] p:text-[10px]">
          <p className="d:py-6 d:px-5 p:p-2 ">
            Công ty TNHH Đầu tư xây dựng nội thất Quang Anh Lands là Công ty
            chuyên Xây dựng - Thiết kế - Thi Công - Hoàn thiện nội ngoại thất
            các công trình dân dụng và công nghiệp có uy tín tại Hà Nội. Chúng
            tôi đi chuyên sâu trong việc nghiên cứu các xu hướng không gian nhà
            ở để kiến tạo các không gian sống tuyệt vời nhất cho khách hàng.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;
