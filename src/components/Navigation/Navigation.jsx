import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="catalog">CATALOG</NavLink>
          </li>
          <li>
            <NavLink to="favorites">FAVORITES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
