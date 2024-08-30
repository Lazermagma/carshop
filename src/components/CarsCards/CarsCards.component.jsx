import React from "react";

const CarsCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10  ">
        <div className="bg-white rounded w-80 h-60 flex flex-col items-center justify-center">
          <img src="assets/images/cars/BMW_X1.png" />
          <div className="p-4">
            <p>BMW X1 </p>
          </div>
        </div>
        <div className="bg-white rounded w-80 h-60 flex items-center justify-center">
          <img src="assets/images/cars/LamborghiniUrus.png" />
        </div>

        <div className="bg-white rounded w-80 h-60 flex items-center justify-center">
          <img src="assets/images/cars/Volvoxc90.png" />
        </div>

        <div className="bg-white rounded w-80 h-60 flex items-center justify-center">
          <img src="assets/images/cars/Jeep Rubicon.png" />
        </div>

        <div className="bg-white rounded w-80 h-60 flex items-center justify-center">
          <img src="assets/images/cars/Mercedes-BenzAMGG63.png" />
        </div>

        <div className="bg-white rounded w-80 h-60 flex items-center justify-center">
          <img src="assets/images/cars/Porsche911GT3RS.png" />
        </div>
      </div>
    </>
  );
};

export default CarsCards;
