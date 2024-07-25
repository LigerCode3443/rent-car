import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectFavoritesCar } from "../../rudex/cars/selectors";
const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && "text-[#3470ff]");
};
const Navigation = () => {
  const favoritesCar = useSelector(selectFavoritesCar);
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-5 h-16 items-center text-lg font-bold">
          <li>
            <NavLink to="/" className={buildLinkClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="catalog" className={buildLinkClass}>
              CATALOG
            </NavLink>
          </li>
          <li>
            <NavLink to="favorites" className={buildLinkClass}>
              FAVORITES
            </NavLink>
          </li>
          <li>
            {favoritesCar.length !== 0 ? (
              <span className="px-1 py-[2px] w-8 bg-[#3470ff] rounded-[100%] flex items-center justify-center flex-col">
                {favoritesCar.length}
              </span>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
