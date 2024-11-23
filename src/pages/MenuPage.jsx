import NavBar from "../components/NavBar"
import menuItems from "../assets/data/menu-items.json"
const menuItemImages = Object.values(import.meta.glob('../assets/img/item*.jpg', { eager: true, as: 'url' }))

function MenuPage() {
  const menuItemsWithImages = menuItems.map((item, index) => ({
    ...item,
    img_link: menuItemImages[index]
  }))

  return (
    <>
      <NavBar/>
      <div id="content">
        <h1 className="menu-heading">Menu</h1>
        <div className="menu-items">
          {menuItemsWithImages.map((menuItem, index) => (
            <div key={index} className="menu-item-card">
              <img className="menu-item-img" src={menuItem.img_link} />
              <div className="menu-item-title">{menuItem.title}</div>
              <div className="menu-item-price">{menuItem.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MenuPage