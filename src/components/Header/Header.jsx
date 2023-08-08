import { images } from '../../constants';
import './Header.css';

export const Header = () => {
  // const panelUsuario = [
  //   'Panel de Control',
  //   'Carrera',
  //   'Perfil',
  //   'Cuenta',
  //   'Pedidos y Subscripciones',
  //   'Cerrar sesión',
  // ];

  return (
    <>
      <header className="header">
        <div className="header__principal">
          <div className="wrapper__img">
            <img className="header__img" src={images.logo} alt="" />
          </div>
          <div className="header__title title">
            <div className="header__title--info">
              <p className="title">HarvardX CS50x</p>
              <p className="title--bold">
                CS50's Introduccion a la Ciencia de la Computación
              </p>
            </div>

            <div className="header__user user">
              <p className="user__title">Ayuda</p>
              <button className="header__button">
                Usuario
                <ul className="user__submenu submenu">
                  <li>
                    <a href="#" className="submenu__elemento">
                      Panel de Control
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submenu__elemento">
                      Carrera
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submenu__elemento">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submenu__elemento">
                      Cuenta
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submenu__elemento">
                      Pedidos y Subscripciones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submenu__elemento">
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        <nav>
          <ul className="header__nav nav">
            <li className="nav__item sm">Curso</li>
            <li className="nav__item sm">Fechas</li>
            <li className="nav__item sm">Discusion</li>

            <li className="nav__item md__1 no-visible">FAQs</li>
            <li className="nav__item md__1">
              Más...
              <a href="#"></a>
            </li>
            <li className="nav__item md__2 no-visible">Progreso</li>
            <li className="nav__item md__2 no-visible">
              Más...
              <a href="#"></a>
            </li>
            <li className="nav__item L__1 no-visible">Temario</li>
            <li className="nav__item L__1 no-visible">
              Más...
              <a href="#"></a>
            </li>
            <li className="nav__item L__2 no-visible">Novedades</li>
            <li className="nav__item L__2 no-visible">
              Más...
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};
