import React from "react";

function LogoCards() {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 ">
        <div className="bg-white rounded-2xl w-56 h-64 hover:bg-gray-400 hover:cursor-pointer  flex items-center justify-center transition ease-in-out">
          <img src="assets/images/logos/Lamborghini_logo.png" />
        </div>
        <div className="bg-white rounded-2xl w-56 h-64 hover:bg-gray-400 hover:cursor-pointer  flex items-center justify-center transition ease-in-out">
          <img src="assets/images/logos/BMW_logo.png" />
        </div>
        <div className="bg-white rounded-2xl w-56 h-64 hover:bg-gray-400 hover:cursor-pointer  flex items-center justify-center transition ease-in-out">
          <img src="assets/images/logos/Volvo_logo.png" />
        </div>
        <div className="bg-white rounded-2xl w-56 h-64 hover:bg-gray-400 hover:cursor-pointer  flex items-center justify-center transition ease-in-out ">
          <img src="assets/images/logos/Mercedes_logo.png" />
        </div>
      </div>
    </>
  );
}

export default LogoCards;
