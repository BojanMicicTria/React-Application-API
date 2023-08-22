import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "../Header/Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
