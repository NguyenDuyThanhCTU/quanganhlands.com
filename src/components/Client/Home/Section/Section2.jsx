import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="relative  pb-9">
      <div className="d:flex-row p:flex-col flex items-start justify-center Home-bg top-5 w-full py-10">
        <div className="d:w-[500px] p-2">
          <h3 className="content-style bg-none text-center ">Giới thiệu</h3>
          <div className="flex flex-col gap-3 text-[15px]">
            <p>
              Công ty Cổ phần đầu tư xây dựng Quang Anh Lands được thành lập năm
              2006, tiền thân là công ty cổ phần xây dựng và dịch vụ thương mại
              Đại Phát, với gần 20 năm xây dựng và phát triển các sản phẩm xây
              dựng dân dụng, công trình công nghiệp, công trình hạ tầng kỹ thuật
              cao...chúng tôi luôn áp dụng những giải pháp tốt nhất để mang đến
              những sản phẩm tuyệt vời cho Quý khách hàng. Địa chỉ: Căn 265 L1
              Louis City Hoàng Mai, Hoàng Mai, Hà Nội. Chúng tôi trân trọng cảm
              ơn các Quý khách hàng đã luôn đồng hành và tin tưởng về uy tín và
              chất lượng sản phẩm của Quang Anh Lands trong suốt thời gian qua.
              Bằng tài năng, trí óc và sự tận tâm của mình, chúng tôi luôn không
              ngừng đổi mới, sáng tạo để kiến tạo các sản phẩm, dịch vụ đáp ứng
              nhu cầu của quý khách với sứ mệnh đồng hành cùng hàng triệu gia
              đình Việt dựng xây hoàn thiện ước mơ về ngôi nhà để sống, tổ ấm
              yêu thương. Quang Anh Lands luôn đồng hành và sẵn sàng tư vấn các
              giải pháp về kỹ thuật, tư vấn thiết kế và thực hiện theo yêu cầu
              của khách hàng. Với đội ngũ kiến trúc sư và kỹ sư giàu kinh
              nghiệm, sáng tạo, nhiệt huyết, chúng tôi sẽ mang đến những giải
              pháp thiết thực và phù hợp nhất cho bạn và gia đình. Chúng tôi
              hiểu rằng từ bản vẽ thiết kế đến việc thi công nội thất là hai
              khái niệm khác nhau, do đó, đội ngũ kiến trúc sư của QAL phải là
              những người am hiểu về từng sản phẩm mà mình tạo ra để đưa đến cho
              khách hàng có khả thi và đáp ứng đúng yêu cầu về thẩm mỹ của Qúy
              khách hàng. Xin chân thành cảm ơn!
            </p>
            <p>Địa chỉ: Căn 265 L1 Louis City Hoàng Mai, Hoàng Mai, Hà Nội. </p>
            <p>
              Chúng tôi trân trọng cảm ơn các Quý khách hàng đã luôn đồng hành
              và tin tưởng về uy tín và chất lượng sản phẩm của Quang Anh Lands
              trong suốt thời gian qua. Bằng tài năng, trí óc và sự tận tâm của
              mình, chúng tôi luôn không ngừng đổi mới, sáng tạo để kiến tạo các
              sản phẩm, dịch vụ đáp ứng nhu cầu của quý khách với sứ mệnh đồng
              hành cùng hàng triệu gia đình Việt dựng xây hoàn thiện ước mơ về
              ngôi nhà để sống, tổ ấm yêu thương.
            </p>
            <p>
              Quang Anh Lands luôn đồng hành và sẵn sàng tư vấn các giải pháp về
              kỹ thuật, tư vấn thiết kế và thực hiện theo yêu cầu của khách
              hàng. Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, sáng
              tạo, nhiệt huyết, chúng tôi sẽ mang đến những giải pháp thiết thực
              và phù hợp nhất cho bạn và gia đình.
            </p>
            <p>
              Chúng tôi hiểu rằng từ bản vẽ thiết kế đến việc thi công nội thất
              là hai khái niệm khác nhau, do đó, đội ngũ kiến trúc sư của QAL
              phải là những người am hiểu về từng sản phẩm mà mình tạo ra để đưa
              đến cho khách hàng có khả thi và đáp ứng đúng yêu cầu về thẩm mỹ
              của Qúy khách hàng.
            </p>
            <p>Xin chân thành cảm ơn!</p>
          </div>
          <div className="mt-5">
            <Link to="/gioi-thieu">
              <span className="bg-yellow-500 p-2">Xem thêm</span>
            </Link>
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
