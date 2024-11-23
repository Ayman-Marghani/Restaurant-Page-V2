import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header>
    <nav>
      <NavLink className="home-btn btn" to="/">Home</NavLink>
      <NavLink className="menu-btn btn" to="/menu">Menu</NavLink>
      <NavLink className="contact-btn btn" to="/contact">Contact</NavLink>
    </nav>
    </header>
  )
}

export default NavBar