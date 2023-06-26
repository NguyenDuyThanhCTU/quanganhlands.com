import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsMessenger, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
export const iconMapping = {
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  HiUserGroup: HiUserGroup,
};

export const HeaderItemsDropDownTools = [
  { name: "Trắc nghiệm tính cách", link: "/job", icon: "BsEmojiSmile" },
  { name: "Tính lương Gross sang Net", link: "/", icon: "BiCalculator" },
  { name: "Trang trí CV", link: "/", icon: "RxMagicWand" },
  { name: "Cẩm nang nghề nghiệp", link: "/employer", icon: "BiBookAlt" },
];

export const ProductSidebarAdmin = [
  {
    name: "Danh sách sản phẩm",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "loại sản phẩm",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Các bài viết",
    icon: "MdOutlinePostAdd",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
  },
  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
  },
  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
  },
];

// Custom Here

export const HeaderItems = [
  // một {} tương ứng với 1 document trong collection (về cấu trúc file json)
  {
    name: "Trang chủ",
    dropdown: [],
    link: "/",
  },
  {
    name: "Giới thiệu",
    dropdown: [],
    link: "/introduction",
  },
  {
    name: "Tin tức",
    dropdown: [],
    link: "/news",
  },
  {
    name: "Thiết kế - thi công nội thất",
    dropdown: [
      {
        name: "Chung Cư",
        link: "/",
      },
      {
        name: "Biệt Thự",
        link: "/",
      },
      {
        name: "Nhà Dân",
        link: "/",
      },
      {
        name: "Shop",
        link: "/",
      },
      {
        name: "Văn Phòng",
        link: "/",
      },
      {
        name: "Khách Sạn",
        link: "/",
      },
    ],
    link: "/designs",
  },
  {
    name: "Thi công xây dựng",
    dropdown: [
      {
        name: "Thi công Biệt Thự",
        link: "/",
      },
      {
        name: "Thi công Khách Sạn",
        link: "/",
      },
      {
        name: "Thi công Nhà Dân",
        link: "/",
      },
      {
        name: "Thi công Trạm điện",
        link: "/",
      },
    ],
    link: "/construction",
  },
  {
    name: "Liên hệ",
    dropdown: [],
    link: "/contact",
  },
];

export const HomeSection4Items = [
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2019/12/quytrinh1.png",
    outline: "https://qhomedecor.vn/wp-content/uploads/2018/10/11.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2019/12/quytrinh2.png",
    outline: "https://qhomedecor.vn/wp-content/uploads/2018/11/phac-thao.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2019/12/quytrinh3.png",
    outline: "https://qhomedecor.vn/wp-content/uploads/2018/11/sanxuat.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2019/12/quytrinh4.png",
    outline: "https://qhomedecor.vn/wp-content/uploads/2018/11/ban-giao.png",
  },
];

export const IntroItems1 = [
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img1.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img2.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img3.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img4.png",
  },
];

export const IntroItems2 = [
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img5.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img6.png",
  },
];

export const IntroItems3 = [
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img7.png",
  },
  {
    image: "https://qhomedecor.vn/wp-content/uploads/2020/10/img8.png",
  },
];

export const NewsSection2 = [
  {
    name: "Tin tức    ",
  },
  {
    name: "Khuyến mại",
  },
  {
    name: "Liên hệ",
  },
  {
    name: "Dịch vụ",
  },
];
