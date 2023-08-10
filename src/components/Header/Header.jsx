import React from 'react'
import m from './Header.module.css'
import Button from './Button/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={m.header}>
      <Link to='/'>
        <div className={m.logo}>
          <div className={m.img}><i className='bx bxs-pizza'></i></div>
        <div className={m.blockTitle}>
          <div className={m.title}>REACT PIZZA</div>
          <div className={m.text}>самая вкусная пицца во вселенной</div>
        </div>
        </div>
      </Link>
      <Link to='/cart'>
        <Button/>
      </Link>       
    </div>
  );
}

export default Header;
