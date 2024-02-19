import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Sidebar from "../sidebar/Sidebar";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="red">
      {/* Menu icon */}
      <div className="fixed top-0  bg-[#171717] left-0 z-50 p-4 mr-4">
        <button
          onClick={toggleSidebar}
          className="text-white  text-2xl focus:outline-none"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Offcanvas */}
      {isOpen && (
        <div>
          <div className="fixed top-0  left-0 z-50 w-4/5 h-full bg-[#212326]">
            <div className="flex justify-left red p-4">
              <button
                onClick={toggleSidebar}
                className="text-white text-2xl focus:outline-none"
              >
                <AiOutlineClose />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
