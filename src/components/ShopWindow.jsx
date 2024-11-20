import React from "react";
import Shop from "./Shop";
import { cities } from "../Clicker";
import { useBearStore } from "../utils/store";

function ShopWindow({
  selectedCity,
}) {
  // console.log('shopStatus')
  // console.log(shopStatus)
  const { shopStatus } = useBearStore();

  const shopKey = {
    name: `${cities[selectedCity].name} Shop Key`,
    description:
      "Experience the future of design and architecture with this advanced VR headset. Great for visualization and immersive design work.",
    price: 100,
    emoji: "🗝",
  };

  const shopKeyArray = [shopKey];
  // console.log(shopKeyArray)

  const shopKeys = [
    {
      cityName: "Lucerne",
      shopStatus: 0,
    },
    {
      cityName: "Columbus",
      shopStatus: 0,
    },
  ];

  function buyShopKey() {}

  function ShopClosed({ coins }) {
    return (
      <div className="h-40 flex flex-col items-center text-center justify-center">
        <div>Please pay the membership fee to enter the shop</div>
      </div>
    );
  }

  return (
    <div>
      {shopStatus === 0 && <ShopClosed selectedCity={selectedCity} />}
      {shopStatus === 1 && (
        <Shop
          selectedCity={selectedCity}
        />
      )}
      {/* {(shopStatus===2) && <ShoppingCenter props={props} />} */}
    </div>
  );
}

export default ShopWindow;
