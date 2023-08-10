import React, { useEffect } from "react";
import m from "./SortPopup.module.css";

function SortPopup({items}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [activeItem, setActiveItem] = React.useState(0)
    const sortRef = React.useRef()
    const activeLable = items[activeItem]

    const popupClick = () => {
        setVisiblePopup(!visiblePopup)
    }

    const handleOutsideClick = (e) => {
        if (!e.composedPath().includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index)
        setVisiblePopup(false)
      }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])


  return (
    <div ref={sortRef} className={m.sort}>
        <div className={`${m.icon} ${visiblePopup ? `${m.rotated}` : ''}`}><i className='bx bxs-up-arrow'></i></div>
      Сортировать по:
      <div className={m.selected}>
        <span onClick={popupClick} className={m.placeholder}>{activeLable}</span>
        {visiblePopup && 
            <ul className={m.list}>
                {items && items.map((name, index) => (
                    <li
                    onClick={() => onSelectItem(index)}
                    className={`${m.item} ${activeItem === index ? `${m.active}` : ''}`}
                    key={`${name}_${index}`}
                    >{name}</li>
                ))}
            </ul>}
      </div>
    </div>
  );
}

export default SortPopup;
