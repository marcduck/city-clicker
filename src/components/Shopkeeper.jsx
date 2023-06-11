import ShopImage from "./ShopImage"

export default function Shopkeeper({ shop, openModal }) {
  return (
    <div className="shopkeeper text-center flex flex-col justify-center items-center gap-2">
      <ShopImage openModal={openModal} shop={shop} />
      <div className="tracking-widest text-xxs sm:text-xs -mb-2">
        Shopkeeper
      </div>
      <div className="font-bold text-xs sm:text-sm">
        {shop.shopkeeper.name}
      </div>
    </div>
  )
}
