import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Introduction from "../components/Introduction/Introduction";
import Contact from "../components/Contact/Contact";
import News from "../components/News/News";
import Construction from "../components/Construction/Construction";
import Designs from "../components/Designs/Designs";
import PostDesign from "../components/Designs/Post/PostDesign";
import PostConstruction from "../components/Designs/Post/PostConstruction";
import PostDetail from "../components/Designs/Post/PostDetail";

export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/introduction",
    component: Introduction,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/designs",
    component: Designs,
  },
  {
    path: "/designs/:id",
    component: PostDesign,
  },
  {
    path: "/post/:id",
    component: PostDetail,
  },
  {
    path: "/construction",
    component: Construction,
  },
  {
    path: "/construction/:id",
    component: PostConstruction,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/login",
    component: Login,
    Layout: EmptyLayout,
  },

  {
    path: "/admin",
    component: Admin,
    Layout: EmptyLayout,
  },
];
