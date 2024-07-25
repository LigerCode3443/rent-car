import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import {
  selectCars,
  selectPage,
  selectTotalPage,
} from "../../rudex/cars/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
  selectFilterMemo,
  togglePage,
  totalPage,
} from "../../rudex/cars/slice";
import { useEffect } from "react";
import { getCarsThunk, getModelThunk } from "../../rudex/cars/operations";

const Catalog = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalPage);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilterMemo);

  useEffect(() => {
    dispatch(getCarsThunk(page))
      .unwrap()
      .then(dispatch(getModelThunk()), dispatch(totalPage()));
  }, [dispatch, page]);
  const handleClick = () => {
    dispatch(togglePage());
  };
  return (
    <div>
      <SearchBar />
      <CarsList cars={filter.length === 0 ? cars : filter} />
      {total !== page && filter.length === 0 && (
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
