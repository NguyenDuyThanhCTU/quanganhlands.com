import React from "react";

import Header from "./Header/Header";

import Fetch from "./Item/Fetch";
import Footer from "./Footer/Footer";
import TopFooter from "./TopFooter/TopFooter";
import PopUp from "./PopUp/PopUp";
import OnTop from "./PopUp/OnTop";

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
        <OnTop />
        <PopUp />
      </div>
    </>
  );
};

export default DefaultLayout;
