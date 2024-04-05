import React from 'react';
import style from './Footer.module.css';

const Header = () => {
  return (
    <header>
      <div className={style.logo}>
        <p>лого</p>
      </div>
      <div className={style.block}>
        <a className={style.link} href="#about">
          О нас
        </a>
      </div>
      <div className={style.block}>
        <a className={style.link} href="#assortment">
          Ассортимен
        </a>
      </div>
      <div className={style.block}>
        <a className={style.link} href="#contacts">
          Контакты
        </a>
      </div>
    </header>
  );
};

export default Header;
