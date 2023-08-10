import React from "react";
import m from "./Categories.module.css";

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <ul className={m.list}>
      <li className={`${m.item} ${activeItem === null ? `${m.active}` : ''}`} onClick={() => onSelectItem(null)}>Все</li>

      {items && items.map((name, index) => (
        <li
          onClick={() => onSelectItem(index)}
          className={`${m.item} ${activeItem === index ? `${m.active}` : ''}`}
          key={`${name}_${index}`}
        >{name}</li>
      ))}
    </ul>
  );
}

export default Categories;
