import React from 'react';
import style from './Footer.module.css';
const Footer = () => {
  return (
    <footer id='contacts' className={style.mainContainer}>
      <div className={style.container}>
        <img src="https://i.pinimg.com/236x/67/e2/ea/67e2ea304308f138461510c78c823a80.jpg" alt="" className={style.image}/>
      </div>
      <div className={style.container}>
        какие-то контактыкакие-то контактыкакие-то контактыкакие-то контактыкакие-то контакты
      </div>
    </footer>

  );
};
export default Footer;
