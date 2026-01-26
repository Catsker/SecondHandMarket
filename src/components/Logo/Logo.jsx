import './Logo.css'
import MainLogo from "@/assets/icons/MainLogo.svg"

const Logo = () => {
  return (
    <a className="logo" href='/'>
      <img src={MainLogo} alt="Logo"/>
    </a>
  )
}

export default Logo