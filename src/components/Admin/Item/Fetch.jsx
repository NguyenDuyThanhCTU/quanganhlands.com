import React, { useEffect } from "react";

import { useStateProvider } from "../../../Context/StateProvider";
import { useData } from "../../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    setPhone,
    setAdvertisement,
    setBanner,
    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAddress,
    setHomePosts,
    setSocialMedia,
    setNewsPosts,
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
  }, []);

  useEffect(() => {
    getDocuments("website").then((data) => {
      //Contact
      setPhone(data[0].phone);
      setGmail(data[0].gmail);
      setLocation(data[0].location);
      setAddress(data[0].address);
      //Slide
      setBanner(data[1].Slide0);
      setAdvertisement(data[1].advertisement);
      //SocialMedia
      setSocialMedia(data[2].Data);
      //Trademark
      setLogo(data[3].websiteLogo);
      setWebsiteName(data[3].websiteName);
    });

    getProducts("homepost").then((data) => {
      setHomePosts(data.reverse());
    });
    getProducts("newspost").then((data) => {
      setNewsPosts(data.reverse());
    });

    getDocuments("products").then((data) => {
      setProducts(data);
    });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
