import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectCars } from "../../rudex/cars/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";

import { selectFilterMemo } from "../../rudex/cars/slice";

const Catalog = ({ setPage }) => {
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilterMemo);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <SearchBar />
      <CarsList cars={filter.length === 0 ? cars : filter} />
      {!filter.length && (
        <button type="button" onClick={handleClick}>
          Load more
        </button>
      )}
    </div>
  );
};
export default Catalog;
