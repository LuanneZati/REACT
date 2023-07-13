import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* Channge components without redirection */}
        <Link to='/'>Home </Link>
        <Link to='/about'> Sobre</Link>
    </nav>
  )
}

export default Navbar