import React from 'react'
import './Navbar.css'
//import dayImg from '../../assets/day.png'
//import night from './src/assets/night.png'


const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="" alt="" className='logo'/>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>

          <img src='' alt="" className='toggleIcon' />
        </div>
    )
}

export default Navbar