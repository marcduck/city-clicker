export default function ShopImage({
  openModal = null,
  shop,
}) {
  return (
    <img
      onClick={openModal ? openModal : null}
      className={`w-40 h-40 rounded-xl object-cover object-top shadow-md hover:shadow-lg cursor-pointer ${
        !openModal && "cursor-default"
      }`}
      src={`./assets/img/clicker/shop/${shop.shopkeeper.img}.png`}
      alt={shop.shopkeeper.name}
    />
  )
}
