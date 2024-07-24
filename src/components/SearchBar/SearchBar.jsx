import { useDispatch, useSelector } from "react-redux";
import { selectSelect } from "../../rudex/cars/selectors";
import { useForm } from "react-hook-form";
import { filterCars } from "../../rudex/filterCars/slice";

export const SearchBar = () => {
  const search = useSelector(selectSelect);
  const model = search.map((item) => item.make);
  const price = search.map((item) => item.rentalPrice);
  const optionsModel = [...new Set(model)];
  const optionsPrice = [...new Set(price)];
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (
      (!data.mileageMin && data.mileageMax) ||
      (data.mileageMin && !data.mileageMax)
    ) {
      alert("Fill in 'from' and 'to'");
    } else {
      dispatch(filterCars(data));
      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          name="make"
          id=""
          {...register("make")}
          defaultValue={{ value: null, label: "make" }}
        >
          <option value="All">all</option>
          {optionsModel.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="price" id="" {...register("price")} defaultValue={null}>
          <option value="All">all</option>
          {optionsPrice.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="mileageMin"
          {...register("mileageMin")}
          defaultValue={null}
        />
        <input
          type="number"
          name="mileageMax"
          {...register("mileageMax")}
          defaultValue={null}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default SearchBar;
