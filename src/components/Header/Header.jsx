import { images } from '../../constants';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__principal">
          <img className="header__img" src={images.logo} alt="" />
          <div className="header__title title">
            <div className="header__title--info">
              <p className="title">HarvardX CS50x</p>
              <p className="title--bold">
                CS50's Introduccion a la Ciencia de la Computación
              </p>
            </div>

            <hr />
            <div className="header__user user">
              <p className="user__title">Ayuda</p>
              <button className="header__button">Usuario</button>
            </div>
          </div>
        </div>

        <ul className="header__nav nav">
          <li className="nav__item">Curso</li>
          <li className="nav__item">Fechas</li>
          <li className="nav__item">Discusion</li>
          <li className="nav__item">FAQs</li>
          <li className="nav__item">Progreso</li>
          <li className="nav__item">Temario</li>
          <li className="nav__item">Novedades</li>
        </ul>
      </header>
      <hr />
    </>
  );
};
