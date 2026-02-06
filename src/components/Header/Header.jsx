import Logo from '@/components/Logo'
import Search from "@/components/Search";
import Nav from "@/components/Nav";
import HeaderLinks from "@/components/HeaderLinks";
import './Header.css'

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__main">
        <Logo />
        <div className="header__search">
          <Search />
        </div>
      </div>
      <div className="header__actions">
        <div className="header__nav">
          <Nav />
        </div>
        <HeaderLinks />
      </div>
    </div>
  </header>
)

export default Header
