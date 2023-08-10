import React from 'react'
import m from './Content.module.css'
import Product from './Product/Product';
import Categories from './Categories/Categories';
import SortPopup from './SortPopup/SortPopup';

function Content({items}) {
  
  
  return (
    <div className={m.content}>
      <div className={m.block}>
        <Categories onClickItem={() => console.log()} items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые']}/>

        <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
      </div>

      <div className={m.product}>
        <div className={m.title}>Все пиццы</div>
        <Product items={items}/>
      </div>
    </div>
  );
}

export default Content;
