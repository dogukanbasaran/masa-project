import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav className='text-white space-x-8 flex items-center text-xl font-sociology2'>

            <NavLink to="/" className={"hover:text-slate-400 duration-500 hidden lg:block"}>Home</NavLink>
            <NavLink to="/docs" className={"hover:text-slate-400 duration-500 hidden lg:block"}>Docs</NavLink>
            <NavLink to="/blog" className={"hover:text-slate-400 duration-500  hidden lg:block"}>Blog</NavLink>
            <NavLink to="/team" className={"hover:text-slate-400 duration-500  hidden lg:block"}>Team</NavLink>
            <NavLink to="/about" className={"hover:text-slate-400 duration-500  hidden lg:block"} >About</NavLink>
            <NavLink to="/contact" className={"hover:text-slate-400 duration-500  hidden lg:block"}>Contact</NavLink>
            
    </nav>
  )
}

export default Menu
