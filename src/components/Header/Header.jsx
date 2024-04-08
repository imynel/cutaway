import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.mainContainer}>
      <div className={style.logoContainer}>
        <p className={style.logo}>лого</p>
      </div>
      <a className={style.link} href="#about">
        О нас
      </a>
      <a className={style.link} href="#assortment">
        Ассортимен
      </a>
      <a className={style.link} href="#contacts">
        Контакты
      </a>
    </header>
  );
};

export default Header;
