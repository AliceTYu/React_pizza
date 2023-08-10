import React from 'react'
import m from './Button.module.css'

function Button() {
  return (
    <button className={m.btn}>
        <div className={m.count}>520 ₽</div>
        <div className={m.block}>
          <div className={m.cart}><i className='bx bx-cart' ></i></div>
          <div className={m.count}>3</div>
        </div>
      </button>
  );
}

export default Button;
