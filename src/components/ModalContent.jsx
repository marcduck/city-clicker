import Dialogue from "./Dialogue"
import ShopImage from "./ShopImage"

export default function ModalContent({ shop }) {
  // Shopkeeper dialogue window
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-8 py-6 md:py-16">
      <div className="flex flex-col items-center gap-3">
        <ShopImage shop={shop} />
        <div className="flex gap-2 items-center">
          <div className="font-bold">
            {shop.shopkeeper.name}
          </div>
          <div className="text-xs ">
            ({shop.shopkeeper.age})
          </div>
        </div>
        <div className="text-sm text-justify max-w-sm">
          {shop.shopkeeper.description ||
            shop.shopkeeper.personalDescription}
        </div>
      </div>
      <div className="flat-outline  order-second md:order-first">
        <Dialogue shopkeeper={shop.shopkeeper} />
      </div>
    </div>
  )
}
