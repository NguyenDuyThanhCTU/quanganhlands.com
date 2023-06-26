import React from "react";

const Section2 = () => {
  return (
    <div className="relative  pb-9">
      <img
        src="https://qhomedecor.vn/wp-content/uploads/2019/12/bg-gioithieu-1.png?id=277"
        alt="background"
      />

      <div className="flex items-start justify-center absolute top-5 w-full">
        <div className="w-[500px]">
          <h3 className="content-style  text-center ">Giới thiệu</h3>
          <div className="flex flex-col gap-3 text-[15px]">
            <p>
              Công ty TNHH Đầu tư xây dựng nội thất Quang Minh có đội ngũ kỹ sư
              và công nhân nhiều năm kinh nghiệm, kỹ thuật cao, đảm bảo sẽ mang
              đến những sản phẩm tuyệt vời cho Quý khách hàng.
            </p>
            <p>
              Với quy mô 02 xưởng, mỗi xưởng có diện tích trên 1.000m2, chúng
              tôi có thể đáp ứng được mọi yêu cầu của khách hàng với chất lượng
              tốt nhất để khách hàng được sở hữu những căn nhà hoàn hảo và trọn
              vẹn nhất.
            </p>
            <p>
              Địa chỉ xưởng: - Xưởng 01: La Dương, Dương Nội, Hà Nội. - Xưởng
              02: Đình Bảng, Từ Sơn, Bắc Ninh.
            </p>
            <p>
              Chúng tôi trân trọng cảm ơn các Quý khách hàng đã luôn đồng hành
              và tin tưởng về uy tín và chất lượng sản phẩm của Công ty TNHH Đầu
              tư xây dựng nội thất Quang Minh trong suốt thời gian qua. Công ty
              TNHH Đầu tư xây dựng nội thất Quang Minh sẽ không ngừng đổi mới,
              sáng tạo để kiến tạo các sản phẩm, dịch vụ nội thất đẳng cấp với
              mục tiêu trở thành doanh nghiệp dẫn đầu thị trường khu vực và quốc
              tế.
            </p>
            <p>Xin chân thành cảm ơn!</p>
          </div>
          <div className="mt-5">
            <span className="bg-yellow-500 p-2">Xem thêm</span>
          </div>
        </div>
        <div className="ml-5">
          <img
            src="https://qhomedecor.vn/wp-content/uploads/2020/10/z2106169255520_18c0632055056b386a6590962466f414.jpg"
            alt="img"
            className="w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
