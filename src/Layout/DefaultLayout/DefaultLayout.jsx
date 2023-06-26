import React from "react";

import Header from "./Header/Header";

import Fetch from "./Item/Fetch";
import Footer from "./Footer/Footer";
import TopFooter from "./TopFooter/TopFooter";
import PopUp from "./PopUp/PopUp";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Fetch />

      <div>
        <Header />
        <div className=" ">{children}</div>
        <TopFooter />
        <Footer />
      </div>
      <div>
        <PopUp />
      </div>
    </>
  );
};

export default DefaultLayout;
