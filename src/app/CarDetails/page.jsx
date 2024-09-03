import React from "react";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AddRoadIcon from "@mui/icons-material/AddRoad";

const CarDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Title and price */}
      <div className="flex flex-row justify-between px-16 py-10 font-bold text-3xl">
        <h1>BMW X1 XDrive 2023</h1>

        <MonetizationOnOutlinedIcon className="size-7" />

        <p>$ 38,600</p>
      </div>

      {/* Car image and details  */}

      {/* Car image */}
      <div className="flex flex-row gap-5 px-16">
        <img src="assets/images/cars/BMW_X1 Road.png" />

        <div className="w-full flex flex-col gap-8">
          {/* Contact Details */}
          <div className="  h-60 rounded-2xl">
            {/* White area */}
            <div className="bg-gray-100 h-36 flex flex-col gap-4 p-6 rounded-t-2xl border-2 border-gray-300">
              <div className="flex flex-row  gap-6">
                <img
                  src="assets/images/user/user.jpg"
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-bold">Abdelrahman Soliman</p>
              </div>

              {/* Location */}
              <div className="flex flex-row gap-7">
                <LocationOnIcon />
                <p className="font-bold"> Cairo ,Egypt </p>
              </div>
            </div>

            {/* Gray area  */}

            <div className="bg-gray-300 h-24 p-6 rounded-b-2xl">
              <div className="flex flex-row gap-6 justify-start">
                <p>Contact :</p>

                <div>
                  <p>
                    <PhoneIcon /> 01001234567
                  </p>
                  <p>
                    <MailOutlineIcon /> Test@email.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Car Specs */}

          <div className="flex flex-row gap-40 w-full">
            <ul className="w-full  flex flex-col gap-3">
              <li className="flex flex-row gap-2">
                <MonetizationOnOutlinedIcon />
                Price: $38,600
              </li>
              <li className="flex flex-row gap-2">
                <img src="assets/vectors/car.svg" />
                Make: BMW
              </li>
              <li className="flex flex-row gap-2">
                <img src="assets/vectors/car.svg" />
                Model: X1
              </li>
              <li className="flex flex-row gap-2">
                <AirportShuttleIcon />
                Body Type: SUV
              </li>
            </ul>
            <ul className="w-full flex flex-col gap-3">
              <li className="flex flex-row gap-2">
                <CalendarMonthIcon /> Registration: 2023
              </li>
              <li className="flex flex-row gap-2">
                <LocalGasStationIcon />
                Fuel Type: Petrol
              </li>
              <li className="flex flex-row gap-2">
                <img src="assets/vectors/road 1.svg" />
                Mileage: 16-20
              </li>
              <li className="flex flex-row gap-2">
                <img src="assets/vectors/manual-gearbox 1.svg" />
                Transmission: Automatic
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Car Carousel */}
    </div>
  );
};

export default CarDetails;
