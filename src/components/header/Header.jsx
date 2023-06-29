import React, { useState } from 'react'
import './style.scss'

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrolly, setLastScrolly] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
    <div>Header</div>
  )
}

export default Header