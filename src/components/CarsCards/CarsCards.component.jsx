import React from "react";
import Link from "next/link";
const CarsCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10  ">
        <Link href="/CarDetails">
          <div className="bg-white rounded-2xl hover:bg-gray-400 w-80 h-60 hover:cursor-pointer flex flex-col items-center justify-center transition ease-in-out">
            <img src="assets/images/cars/BMW_X1.png" />
            <div className="p-4 w-full font-semibold">
              <p>BMW X1 </p>
            </div>
          </div>
        </Link>
        <div className="bg-white rounded-2xl w-80 h-60 hover:bg-gray-400 hover:cursor-pointer flex flex-col items-center justify-center transition ease-in-out">
          <img src="assets/images/cars/LamborghiniUrus.png" />
          <div className="p-4 w-full font-semibold">
            <p>Lamborghini Urus </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl w-80 h-60 hover:bg-gray-400 hover:cursor-pointer flex flex-col items-center justify-center transition ease-in-out">
          <img src="assets/images/cars/Volvoxc90.png" />
          <div className="p-4 w-full font-semibold">
            <p>Volvo XC90 </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl w-80 h-60 flex hover:bg-gray-400 hover:cursor-pointer flex-col items-center justify-center transition ease-in-out">
          <img src="assets/images/cars/Jeep Rubicon.png" />
          <div className="p-4 w-full font-semibold">
            <p>Jeep Rubicon </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl w-80 h-60 hover:bg-gray-400 hover:cursor-pointer flex flex-col items-center justify-center transition ease-in-out">
          <img src="assets/images/cars/Mercedes-BenzAMGG63.png" />
          <div className="p-4 w-full font-semibold">
            <p>Mercedes-Benz AMG G 63 </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl w-80 h-60 flex hover:bg-gray-400 hover:cursor-pointer flex-col items-center justify-center transition ease-in-out">
          <img src="assets/images/cars/Porsche911GT3RS.png" />
          <div className="p-4 w-full font-semibold">
            <p>Porsche 911 GT3 RS </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsCards;
