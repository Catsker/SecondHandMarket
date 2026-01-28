import './Header.css'
import Logo from '@/components/Logo'
import Search from "@/components/Search";
import Nav from "@/components/Nav";
import HeaderLinks from "@/components/HeaderLinks";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__main">
        <Logo />
        <Search />
      </div>
      <div className="header__actions">
        <Nav />
        <HeaderLinks />
      </div>
    </div>
  </header>
)

export default Header
