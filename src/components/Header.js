import React from 'react'
import"./Header.css";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    
  <div className='header'>
    <Link to="/" className="title">
    BRAIN BLITZ HUB
    </Link>
    <hr className='divider'/>
  </div>
    
  )
}

export default Header

