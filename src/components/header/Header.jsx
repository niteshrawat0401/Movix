import React from 'react'
import './style.scss'
import { useState, useEffect } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movix-logo.svg';

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrolly, setLastScrolly] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');

  const navigate = useNavigate();
  const loacation = useLocation();


  return (
    <header className='header'>
      <ContentWrapper>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Showes</li>
          <li className="menuItem">
            <HiOutlineSearch/>
          </li>
        </ul>
      </ContentWrapper>
    </header>
  )
}

export default Header