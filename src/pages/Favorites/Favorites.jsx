import { useSelector } from "react-redux";
import { selectFavoritesCar } from "../../rudex/cars/selectors";
import CarsList from "../../components/CarsList/CarsList";

const Favorites = () => {
  const favoritesCar = useSelector(selectFavoritesCar);
  return (
    <div>
      <CarsList cars={favoritesCar} />
    </div>
  );
};
export default Favorites;
