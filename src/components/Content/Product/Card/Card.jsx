import React from "react";
import s from "./Card.module.css";

function Card({ name, price, imgUrl, types, sizes }) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectItem = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className={s.card}>
      <div className={s.image}>
        <img className={s.img} src={imgUrl} alt="card" />
      </div>

      <div className={s.title}>{name}</div>

      <div className={s.btn}>
        <div className={s.type}>
          {availableTypes.map((type, index) => (
            <button
              key={type}
              onClick={() => onSelectItem(index)}
              className={`${s.text} ${
                activeType === index ? `${s.active}` : ""
              } ${!types.includes(index) ? `${s.disable}` : ""}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className={s.type}>
          {availableSizes.map((size, index) => (
            <button
              key={size}
              onClick={() => onSelectSize(size)}
              className={`${s.text} ${
                activeSize === size ? `${s.active}` : ""
              } ${!sizes.includes(size) ? `${s.disable}` : ""}`}
            >
              {size} см.
            </button>
          ))}
        </div>
      </div>

      <div className={s.cart}>
        <div className={s.price}>от {price} ₽</div>
        <button className={`${s.btnCart}`}>
          <div className={s.icon}>
            <i className="bx bx-plus"></i>
          </div>
          <div className={s.btnTitle}>Добавить</div>
          <div className={`${s.btnCount}`}>2</div>
        </button>
      </div>
    </div>
  );
}

export default Card;
