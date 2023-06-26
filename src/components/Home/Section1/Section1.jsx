import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Section1 = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://qhomedecor.vn/wp-content/uploads/2020/10/slider2-1865x600.png"
              alt="banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://qhomedecor.vn/wp-content/uploads/2020/10/slider1-1865x600.png"
              alt="banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://qhomedecor.vn/wp-content/uploads/2020/10/slider3-1865x600.png"
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>
        <div className="text-white bg-[rgba(0,0,0,0.7)] absolute max-w-[550px] right-36 bottom-20 z-10">
          <p className="py-6 px-5">
            Công ty TNHH Đầu tư xây dựng nội thất Quang Minh là Công ty chuyên
            Xây dựng - Thiết kế - Thi Công - Hoàn thiện nội ngoại thất các công
            trình dân dụng và công nghiệp có uy tín tại Hà Nội. Chúng tôi đi
            chuyên sâu trong việc nghiên cứu các xu hướng không gian nhà ở để
            kiến tạo các không gian sống tuyệt vời nhất cho khách hàng.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;
