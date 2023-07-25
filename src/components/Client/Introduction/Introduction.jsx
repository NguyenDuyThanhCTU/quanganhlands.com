import React from "react";
import { IntroItems1, IntroItems2, IntroItems3 } from "../../../Utils/item";

const Introduction = () => {
  return (
    <div className="d:mx-80 p:mx-0 mt-10 ">
      {/* <-- Section1 --> */}
      <div className="p-2">
        <h3 className="content-style">THƯ NGỎ!</h3>
        <div className="flex flex-col gap-5 mb-4">
          <p>Kính gửi: Quý Khách hàng</p>
          <p>
            Công ty TNHH Đầu tư xây dựng nội thất Quang Anh Lands là Công ty
            chuyên Xây dựng – Thiết kế – Thi Công – Hoàn thiện nội ngoại thất
            các công trình dân dụng và công nghiệp có uy tín tại Hà Nội.
          </p>
          <p>
            Nhằm đáp ứng nhu cầu thị trường về xây dựng và trang trí nội ngoại
            thất ngày càng đa dạng về mẫu mã, phong phú về kiểu dáng, màu sắc,
            Công ty TNHH Đầu tư xây dựng nội thất Quang Anh luôn xác định bằng
            tất cả những nỗ lực của toàn thể nhân viên trong công ty sẽ mang đến
            cho Quý Khách hàng những sản phẩm hoàn thiện có chất lượng cao và
            các dịch vụ hậu mãi chu đáo, tận tình.
          </p>
          <p>
            Với độ ngũ công nhân lành nghề, xưởng sản xuất quy mô, hiện đại,
            chúng tôi mong muốn đáp ứng tốt nhất những tiêu chuẩn của khách hàng
            từ chi tiết nhỏ nhất.
          </p>
          <p>
            Đến với Công ty TNHH Đầu tư xây dựng nội thất Quang Anh Lands, Quý
            Khách sẽ được sử dụng dịch vụ hoàn chỉnh từ thiết kế đến khi đưa vào
            sử dụng với dịch vụ bảo trì chu đáo, chuyên nghiệp.
          </p>
          <p>Trân trọng!</p>
          <p>
            <strong>
              Dưới đây xin giới thiệu đến quý khách hàng một số hình ảnh sản
              xuất của công ty!
            </strong>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {IntroItems1.map((items) => (
            <>
              <img src={items.image} alt="" />
            </>
          ))}
        </div>
      </div>

      {/* <-- Section2 --> */}

      <div className="mt-10 p-2">
        <h3 className="content-style">TẦM NHÌN, CHẤT LƯỢNG, UY TÍN</h3>
        <div className="flex flex-col gap-5 mb-4 mt-4">
          <p>
            <strong>TẦM NHÌN</strong>
          </p>
          <p>
            Công ty TNHH Đầu tư xây dựng nội thất Quang Anh đặt mục tiêu sẽ phát
            triển vươn lên là một trong những Công ty xây dựng – Thiết kế – Thi
            công – Hoàn thiện nội ngoại thất hàng đầu tại Hà Nội.
          </p>
          <p>
            <strong>CHẤT LƯỢNG</strong>
          </p>
          <div>
            <p>
              Công ty TNHH Đầu tư xây dựng nội thất Quang Anh luôn chú trọng đến
              chất lượng của từng mặt hàng, sự hàng lòng của khách hàng chính là
              thành công của chúng tôi.
            </p>
            <p>
              Đội ngũ kiến trúc sư chuyên nghiệp luôn cập nhật các sản phẩm nội
              ngoại thất theo các xu hướng và công nghệ mới nhất, giúp khách
              hàng dễ dàng hơn trong việc lựa chọn sản phẩm.
            </p>
            <p>
              Ngoài công năng, mỗi sản phẩm tư vấn cho khách hàng phải mang vẻ
              đẹp riêng phù hợp với phong cách của riêng mỗi khách hàng.
            </p>
          </div>
          <strong>UY TÍN</strong>
          <p>
            Công ty TNHH Đầu tư xây dựng nội thất Quang Anh luôn tìm kiếm để đưa
            đến cho khách hàng các sản phẩm hoàn thiện nội ngoại thất có chất
            lượng cao, phù hợp với nhu cầu và thị hiếu của khách hàng. Tất cả
            các sản phẩm đều được kiểm tra kỹ từng chi tiết trước khi bàn giao
            đến tay khánh hàng.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {IntroItems2.map((items) => (
            <>
              <img src={items.image} alt="" />
            </>
          ))}
        </div>
      </div>

      {/* <-- Section3 --> */}

      <div className="my-10 p-2">
        <h3 className="content-style">PHƯƠNG CHÂM HOẠT ĐỘNG </h3>
        <div className="flex flex-col gap-5 mb-4">
          <p>
            <strong className="text-[20px]">Chọn vật liệu an toàn</strong>
          </p>
          <p>
            Sử dụng nguyên liệu xanh thân thiện với môi trường và đảm bảo sức
            khỏe cho quý khách hàng.
          </p>
          <p>
            <strong className="text-[20px]">
              Đặt chất lượng sản phẩm lên hàng đầu
            </strong>
          </p>
          <p>
            Mang đến các sản phẩm về Xây dựng – Thiết kế – Thi công hoàn thiện
            nội ngoại thất có tính đột phá, phù hợp với nhu cầu khách hàng.
          </p>
          <p>
            <strong className="text-[20px]">Không ngừng sáng tạo </strong>
          </p>
          <p>
            Luôn cập nhật công nghệ thi công và xu hướng thiết kế mới nhất trên
            thị trường.
          </p>
          <p>
            <strong className="text-[20px]">Làm việc chuyên nghiệp </strong>
          </p>
          <p>
            Nhân sự Công ty TNHH Đầu tư xây dựng nội thất Quang Anh luôn làm
            việc với tinh thần nhiệt huyết, có trách nhiệm cao để đảm bảo mang
            đến cho khách hàng sản phẩm và dịch vụ chất lượng nhất.
          </p>
          <p>
            <strong className="text-[20px]">Uy tín hàng đầu </strong>
          </p>
          <p>Khẳng định thương hiệu bằng chất lượng của sản phẩm và dịch vụ.</p>
          <p>
            <strong className="text-[20px]">
              Khách hàng hài lòng là thành công{" "}
            </strong>
          </p>
          <p>
            Sự hài lòng của quý khách hàng đối với các sản phẩm chính là thành
            công của chúng tôi.
          </p>
        </div>
        <div className="grid grid-cols-2">
          {IntroItems3.map((items) => (
            <>
              <img src={items.image} alt="" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
