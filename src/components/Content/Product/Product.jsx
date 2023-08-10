import React from 'react'
import s from './Product.module.css'
import Card from './Card/Card';

function Product() {
  return (
    <div className={s.product}>
      <ul className={s.list}>
        <li className={s.item}>
            <Card/>
        </li>
        <li className={s.item}>
            <Card/>
        </li>
        <li className={s.item}>
            <Card/>
        </li>
        <li className={s.item}>
            <Card/>
        </li>
        <li className={s.item}>
            <Card/>
        </li>
        <li className={s.item}>
            <Card/>
        </li>
      </ul>
    </div>
  );
}

export default Product;
