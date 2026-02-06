import {Link} from "react-router-dom";
import {NAV_ROUTES} from '@/consts/Routes.js'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      {NAV_ROUTES.map((route) => (
        <Link
          key={route.to}
          className="nav__item"
          to={route.to}
        >
          {route.text}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
