import { images } from '../../constants';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__img" src={images.logo} alt="" />
        <div className="header__title">
          <p className="header__title">HarvardX CS50x</p>
          <p className="">CS50's Introduccion a la Ciencia de la Computación</p>
        </div>

        <div className="header__user">
          <p className="">Ayuda</p>
          <button className="header__button">Usuario</button>
        </div>

        <div className="header__nav">
          <ul>
            <li>Curso</li>
            <li>Fechas</li>
            <li>Discusion</li>
            <li>FAQS</li>
            <li>Progreso</li>
            <li>Temario</li>
            <li>WhatsNew</li>
          </ul>
        </div>
      </header>
    </>
  );
};
