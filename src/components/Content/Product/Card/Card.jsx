import React from 'react'
import s from './Card.module.css'

function Card() {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src="/image/img_01.jpg" alt="card" />
      </div>

      <div className={s.title}>Цыпленок барбекю</div>

      <div className={s.btn}>
        <div className={s.type}>
            <button className={`${s.text} ${s.active}`}>тонкое</button>
            <button className={s.text}>традиционное</button>
        </div>
        <div className={s.type}>
            <button className={`${s.text} ${s.active}`}>26 см.</button>
            <button className={s.text}>30 см.</button>
            <button className={s.text}>40 см.</button>
        </div>
      </div>

      <div className={s.cart}>
        <div className={s.price}>от 395 ₽</div>
        <button className={`${s.btnCart}`}>
            <div className={s.icon}><i className='bx bx-plus' ></i></div>
            <div className={s.btnTitle}>Добавить</div>
            <div className={`${s.btnCount}`}>2</div>
        </button>
      </div>
    </div>
  );
}

export default Card;
