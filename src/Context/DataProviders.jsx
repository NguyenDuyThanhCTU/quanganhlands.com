import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  // Default
  const [Gmail, setGmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Phone, setPhone] = useState("");

  const [Banner, setBanner] = useState([]);

  const [SocialMedia, setSocialMedia] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Logo, setLogo] = useState("");
  const [Websitename, setWebsiteName] = useState("");

  const [Facebook, setFacebook] = useState();
  const [Fanpages, setFanpages] = useState();
  const [Instagram, setInstagram] = useState();
  const [Twitter, setTwitter] = useState();
  const [Message, setMessage] = useState();
  const [Tiktok, setTiktok] = useState();
  const [Zalo, setZalo] = useState();
  const [Youtube, setYoutube] = useState();
  // Custom

  const [Advertisement, setAdvertisement] = useState([]);
  const [HomePosts, setHomePosts] = useState([]);
  const [NewsPosts, setNewsPosts] = useState([]);

  return (
    <DataContext.Provider
      value={{
        NewsPosts,
        setNewsPosts,
        HomePosts,
        setHomePosts,
        Facebook,
        setFacebook,
        Fanpages,
        setFanpages,
        Instagram,
        setInstagram,
        Twitter,
        setTwitter,
        Message,
        setMessage,
        Tiktok,
        setTiktok,
        Zalo,
        setZalo,
        Youtube,
        setYoutube,

        SocialMedia,
        setSocialMedia,
        Gmail,
        setGmail,
        Address,
        setAddress,
        Websitename,
        setWebsiteName,
        Advertisement,
        setAdvertisement,
        Products,
        setProducts,

        Phone,
        setPhone,
        Banner,
        setBanner,
        Location,
        setLocation,
        Logo,
        setLogo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
