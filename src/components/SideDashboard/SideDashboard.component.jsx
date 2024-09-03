import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

const SideDashboard = () => {
  return (
    <div className=" bg-white w-56  flex flex-col justify-between gap-5 p-3">
      <div className="flex flex-col gap-4">
        <p className="Font-handwrite text-center">
          <EmojiTransportationIcon />
          CarShop
        </p>

        <ul className="list-none flex flex-col gap-5  ">
          <li className="flex flex-row gap-2  rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
            <GridViewIcon /> Dashboard
          </li>
          <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00008 17.3333C13.6025 17.3333 17.3334 13.6024 17.3334 8.99999C17.3334 4.39762 13.6025 0.666656 9.00008 0.666656C4.39771 0.666656 0.666748 4.39762 0.666748 8.99999C0.666748 13.6024 4.39771 17.3333 9.00008 17.3333ZM14.2666 13.0881C15.1442 11.9592 15.6667 10.5406 15.6667 8.99999C15.6667 5.60031 13.122 2.79498 9.83341 2.3849V5.77167C11.2711 6.14171 12.3334 7.44679 12.3334 8.99999C12.3334 9.6182 12.1651 10.1971 11.8719 10.6934L14.2666 13.0881ZM13.088 14.2666L10.6933 11.8719C10.1971 12.1651 9.61822 12.3333 9.00008 12.3333C8.38194 12.3333 7.8031 12.1651 7.30685 11.8719L4.91212 14.2666C6.04101 15.1441 7.45952 15.6667 9.00008 15.6667C10.5406 15.6667 11.9592 15.1441 13.088 14.2666ZM5.66675 8.99999C5.66675 9.6182 5.83504 10.1971 6.12831 10.6934L3.73359 13.0881C2.856 11.9592 2.33341 10.5406 2.33341 8.99999C2.33341 5.60031 4.87815 2.79498 8.16675 2.3849V5.77167C6.72906 6.14171 5.66675 7.44679 5.66675 8.99999ZM9.00008 10.6667C9.92056 10.6667 10.6667 9.92046 10.6667 8.99999C10.6667 8.07952 9.92056 7.33332 9.00008 7.33332C8.07961 7.33332 7.33341 8.07952 7.33341 8.99999C7.33341 9.92046 8.07961 10.6667 9.00008 10.6667Z"
                fill="black"
              />
            </svg>
            Assets
          </li>
          <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
            <DirectionsCarIcon />
            Booking
          </li>
          {/* <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out">
            <LocalMallIcon />
            Sell Cars
          </li>
          <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0893 3.08925C18.4148 2.76381 18.4148 2.23617 18.0893 1.91073C17.7639 1.5853 17.2363 1.5853 16.9108 1.91073L6.49416 12.3274C6.16872 12.6528 6.16872 13.1805 6.49416 13.5059C6.8196 13.8314 7.34723 13.8314 7.67267 13.5059L18.0893 3.08925Z"
                fill="black"
              />
              <path
                d="M4.33934 16.8392C4.66477 16.5138 4.66477 15.9862 4.33934 15.6607C4.0139 15.3353 3.48626 15.3353 3.16083 15.6607L1.91083 16.9107C1.58539 17.2362 1.58539 17.7638 1.91083 18.0892C2.23626 18.4147 2.7639 18.4147 3.08934 18.0892L4.33934 16.8392Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20549 16.1818C5.43652 16.4128 5.79454 16.5013 6.04841 16.2957C6.42556 15.9901 6.66666 15.5232 6.66666 15C6.66666 14.0795 5.92046 13.3333 4.99999 13.3333C4.47678 13.3333 4.00987 13.5744 3.70431 13.9516C3.49863 14.2054 3.58715 14.5635 3.81818 14.7945L5.20549 16.1818ZM6.01925 18.1746C5.3879 18.3772 4.7366 18.0699 4.26776 17.6011L2.39889 15.7322C1.93005 15.2634 1.62283 14.6121 1.82537 13.9807C2.25603 12.6383 3.51454 11.6667 4.99999 11.6667C6.84094 11.6667 8.33332 13.159 8.33332 15C8.33332 16.4854 7.36166 17.744 6.01925 18.1746Z"
                fill="black"
              />
              <path
                d="M1.91066 3.08925C1.58522 2.76381 1.58522 2.23617 1.91066 1.91073C2.2361 1.5853 2.76374 1.5853 3.08917 1.91073L13.5058 12.3274C13.8313 12.6528 13.8313 13.1805 13.5058 13.5059C13.1804 13.8314 12.6528 13.8314 12.3273 13.5059L1.91066 3.08925Z"
                fill="black"
              />
              <path
                d="M15.6607 16.8392C15.3352 16.5138 15.3352 15.9862 15.6607 15.6607C15.9861 15.3353 16.5137 15.3353 16.8392 15.6607L18.0892 16.9107C18.4146 17.2362 18.4146 17.7638 18.0892 18.0892C17.7637 18.4147 17.2361 18.4147 16.9107 18.0892L15.6607 16.8392Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7945 16.1818C14.5635 16.4128 14.2055 16.5013 13.9516 16.2957C13.5744 15.9901 13.3333 15.5232 13.3333 15C13.3333 14.0795 14.0795 13.3333 15 13.3333C15.5232 13.3333 15.9901 13.5744 16.2957 13.9516C16.5014 14.2054 16.4129 14.5635 16.1818 14.7945L14.7945 16.1818ZM13.9808 18.1746C14.6121 18.3772 15.2634 18.0699 15.7322 17.6011L17.6011 15.7322C18.07 15.2634 18.3772 14.6121 18.1746 13.9807C17.744 12.6383 16.4855 11.6667 15 11.6667C13.1591 11.6667 11.6667 13.159 11.6667 15C11.6667 16.4854 12.6383 17.744 13.9808 18.1746Z"
                fill="black"
              />
            </svg>
            Services
          </li> */}
        </ul>
      </div>

      <ul className="list-none flex flex-col gap-5 justify-end ">
        <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
          <SettingsIcon /> Settings
        </li>
        <li className="flex flex-row gap-2 rounded-xl items-center hover:bg-gray-400 p-2 hover:cursor-pointer hover:rounded-xl  transition ease-in-out ">
          <LogoutIcon /> Logout
        </li>
      </ul>
    </div>
  );
};

export default SideDashboard;
