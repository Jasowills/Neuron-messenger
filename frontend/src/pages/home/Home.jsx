import React from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MobileSidebar from "../../components/mobileSidebar/MobileSidebar";
import { useMediaQuery } from "@react-hook/media-query";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <div className="flex w-[100%] sm:h-[450px] h-[100%] md:h-[100%]">
      {isSmallScreen ? <MobileSidebar /> : <Sidebar />}
      <MessageContainer />
    </div>
  );
};

export default Home;
