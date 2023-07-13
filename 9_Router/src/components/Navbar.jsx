import './Navbar.css'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* Channge components without redirection */}
        {/* <Link to='/'>Home </Link>
        <Link to='/about'> Sobre</Link>
        <Link to='/products'> Produto</Link> */}
        
        {/* <NavLink to='/' className={({isActive}) => (isActive ? "" : "")}>Home</NavLink> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/products'>Produto</NavLink>
        
    </nav>
  )
}

export default Navbar