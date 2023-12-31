import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import Introduction from "../components/Client/Introduction/Introduction";
import Contact from "../components/Client/Contact/Contact";
import News from "../components/Client/News/News";
import Designs from "../components/Client/Designs/Designs";
import PostDesign from "../components/Client/Post/PostDesign";
import PostDetail from "../components/Client/Post/PostDetail";
import Construction from "../components/Client/Construction/Construction";
import PostConstruction from "../components/Client/Post/PostConstruction";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: AdminLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },

  {
    path: "/gioi-thieu",
    component: Introduction,
    Layout: ClientLayout,
  },
  {
    path: "/contact",
    component: Contact,
    Layout: ClientLayout,
  },
  // {
  //   path: "/news",
  //   component: News,
  //   Layout: ClientLayout,
  // },
  {
    path: "/thiet-ke",
    component: Designs,
    Layout: ClientLayout,
  },
  {
    path: "/thiet-ke/:id",
    component: PostDesign,
    Layout: ClientLayout,
  },
  {
    path: "/post/:id",
    component: PostDetail,
    Layout: ClientLayout,
  },
  {
    path: "/xay-dung",
    component: Construction,
    Layout: ClientLayout,
  },
  {
    path: "/xay-dung/:id",
    component: PostConstruction,
    Layout: ClientLayout,
  },
];
