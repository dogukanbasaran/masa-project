import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav className='text-white space-x-4 flex items-center text-xl'>

            <NavLink to="/" className={"hover:text-slate-400 duration-500"}>Home</NavLink>
            <NavLink to="/docs" className={"hover:text-slate-400 duration-500"}>Docs</NavLink>
            <NavLink to="/about" className={"hover:text-slate-400 duration-500"} >About</NavLink>
            <NavLink to="/team" className={"hover:text-slate-400 duration-500"}>Team</NavLink>
            <NavLink to="/contact" className={"hover:text-slate-400 duration-500"}>Contact</NavLink>
            
    </nav>

  )
}

export default Menu
