import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const TopBar = () => {
  return (
    <div className="w-full bg-white h-20">
      <div className="w-full h-full p-9 flex flex-row items-center justify-between ">
        <div className="bg-[#F5F4F6] flex flex-row items-center p-2 gap-2 rounded-lg  w-80 h-11">
          <SearchIcon />
          <input
            type="input"
            className="bg-[#F5F4F6]  w-80 h-11"
            placeholder="Search or type"
          />
        </div>
        <div className="p-2 flex flex-row items-center gap-3">
          <NotificationsNoneIcon />
          <img
            src="assets/images/user/user.jpg"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
