import Button from './Button'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Dravida Manavar Peravai" className="logo-badge" />
      <Button>Join the Movement</Button>
    </nav>
  )
}
