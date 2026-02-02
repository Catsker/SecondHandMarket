import {Link} from "react-router-dom";
import {ROUTES} from '@/consts/Routes.js'
import './Nav.css'

const Nav = () => {
  const routes = [
    {
      to: ROUTES.about,
      text: 'About us',
    },
    {
      to: ROUTES.allshops,
      text: 'All shops',
    },
    {
      to: ROUTES.merchant,
      text: 'Become a merchant',
    },
  ]

  return (
    <nav className="nav">
      {routes.map((route, index) => (
        <Link key={route} className="nav__item" to={route.to}>{route.text}</Link>
      ))}
    </nav>
  )
}

export default Nav
