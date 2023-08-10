import React from 'react'
import s from './Product.module.css'
import Card from './Card/Card';

function Product({items}) {

  return (
    <div className={s.product}>
      <ul className={s.list}>

        {items.map((obj) => (
            <li className={s.item}>
              <Card 
                key={obj.id}
                {...obj}/>
            </li>
          ))}
        

      </ul>
    </div>
  );
}

export default Product;
