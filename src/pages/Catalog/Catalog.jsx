import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import {
  selectCars,
  selectPage,
  selectTotalPage,
} from "../../rudex/cars/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";

import { selectFilterMemo, togglePage } from "../../rudex/cars/slice";

const Catalog = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPage);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilterMemo);

  const handleClick = () => {
    dispatch(togglePage());
  };
  return (
    <div>
      <SearchBar />
      <CarsList cars={filter.length === 0 ? cars : filter} />
      {totalPage !== page && (
        <button
          type="button"
          onClick={handleClick}
          className="btn py-[15px] px-[99px] mx-[auto] mb-10"
        >
          Load more
        </button>
      )}
    </div>
  );
};
export default Catalog;
