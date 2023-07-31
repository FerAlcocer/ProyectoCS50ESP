import { images } from '../../constants';
import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="nav__principal">
        <div>
          <img src={images.logo} alt="" />
        </div>
        <div>
          <p>HarvardX CS50x</p>
          <p>CS50's Introduccion a la Ciencia de la Computación</p>
        </div>
        <ul>
          <li>Curso</li>
          <li>Fechas</li>
          <li>Discusion</li>
          <li>FAQS</li>
          <li>Progreso</li>
          <li>Temario</li>
          <li>WhatsNew</li>
        </ul>
        <div>
          <p>Ayuda</p>
          <button>Usuario</button>
        </div>
      </nav>
    </>
  );
};
