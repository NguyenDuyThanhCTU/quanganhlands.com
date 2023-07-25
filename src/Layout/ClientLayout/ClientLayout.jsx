import React from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Footer from "./Section/Footer";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import TopFooter from "./Section/TopFooter";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />

      <div>
        <Header />
        <div className=" ">{children}</div>
        <TopFooter />
        <Footer />
      </div>
      <div>
        <OnTop />
        <Hotline />
      </div>
    </>
  );
};

export default ClientLayout;
