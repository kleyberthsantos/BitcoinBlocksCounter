import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar__container'>
        <nav >
            <ul className='navbar'>
                <Link to="/"> Home </Link>
                <Link to="/about">About</Link>
                <a href="https://github.com/kleyberthsantos/BitcoinBlocksCounter/tree/main/blockcounter" target='_blank'> Code </a>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar