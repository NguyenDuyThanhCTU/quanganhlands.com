import React from "react";
import { Helmet } from "react-helmet";
import { useData } from "../Context/DataProviders";

const DefaultLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  return (
    <>
      <Helmet>
        {/* <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} /> */}
        <title>Lê Nguyễn Kim Trang Shop</title>
      </Helmet>
      {children}
    </>
  );
};

export default DefaultLayout;
