import { React, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import styles from './styles/navbar.module.css'
function Navbar() {
  const [style, setStyle] = useState({ maxHeight: '150px' })
  const showNav = () => {
    const resNav = document.getElementById('resNav');
    const menu = document.getElementById('menu');
    if (resNav.style.maxHeight == '') {
      resNav.style.maxHeight = '150px';
      menu.style.border = '2px solid rgb(210,210,210)';
    } else {
      resNav.style.maxHeight = '';
      menu.style.border = 'none';
    }
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.mainNavbar}>
        <h2>Learning World</h2>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className={styles.menuBtn} id='menu'>
          <IoMenu onClick={showNav} />
        </div>
      </div>
      <div id='resNav' className={styles.secondaryNavbar}>
        <div className={styles.secondaryNavLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar