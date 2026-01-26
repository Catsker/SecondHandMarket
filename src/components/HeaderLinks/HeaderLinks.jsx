import './HeaderLinks.css'
import {Link} from "react-router-dom";
import heartIcon from "@/assets/icons/Heart.svg";
import cartIcon from "@/assets/icons/Cart.svg";
import profileIcon from "@/assets/icons/Profile.svg";
import {ROUTES} from "@/consts/Routes";

const HeaderLinks = () => {
  const routes = [
    {
      to: ROUTES.favourites,
      img: heartIcon,
      alt: 'Heart Icon',
    },
    {
      to: ROUTES.cart,
      img: cartIcon,
      alt: 'Cart Icon',
    },
    {
      to: ROUTES.profile,
      img: profileIcon,
      alt: 'Profile Icon',
    },
  ]

  return (
    <div className="links">
      {routes.map((route) => (
        <Link key={route} className="links__item" to={route.to}>
          <img className="links__icon" src={route.img} alt={route.alt} />
        </Link>
      ))}
    </div>
  )
}

export default HeaderLinks
