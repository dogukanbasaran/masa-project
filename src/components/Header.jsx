import React from 'react'
import logo from '../assets/images/logo.png'
import Menu from '../components/Menu'

const Header = () => {
  return (
    <header className='bg-gradient-to-b from-slate-800 to-black flex justify-between items-center h-[120px] px-5' id='header'>
        {/* LOGO */}
        <div className='flex items-center gap-2' id='logo'>
          <img src={logo} className='h-[80px] w-[80px]'/>
          <h1 className='text-4xl text-white font-bold whitespace-nowrap uppercase'>MASA</h1>
        </div>
        {/* MENU */}
        <Menu/>
        {/* LOGIN */}
        <div className='flex items-center' id='login'>
          <button className='flex bg-blue-800 hover:bg-blue-500 duration-500 text-white font-semibold px-4 py-2 uppercase'>LOGIN</button>
        </div>
    </header>
  )
}

export default Header
