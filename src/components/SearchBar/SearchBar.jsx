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
  const optionsValue = optionsPrice
    .map((item) => Number(item.replace("$", "")))
    .toSorted((a, b) => a - b);
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
    <div className="flex justify-center mb-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-[18px] items-end"
      >
        <label htmlFor="" className="flex flex-col ">
          <span className="text-[#8a8a89] text-sm mb-2"> Car brand</span>
          <select
            name="make"
            id=""
            {...register("make")}
            className="bg-[#f7f7fb] py-[14px] pl-[18px] pr-[14px] rounded-[14px] w-56"
          >
            <option value="All">Select a model</option>
            {optionsModel.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="text-[#8a8a89] text-sm mb-2"> Price / 1 hour</span>
          <select
            name="price"
            id=""
            {...register("price")}
            defaultValue={null}
            className="bg-[#f7f7fb] py-[14px] pl-[18px] pr-[14px] rounded-[14px] w-[125px]"
          >
            <option value="All">To</option>
            {optionsPrice.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="flex flex-col">
          <p className="text-[#8a8a89] text-sm mb-2">Car mileage / km</p>
          <div className="flex flex-row">
            <div className="relative">
              <input
                type="number"
                name="mileageMin"
                {...register("mileageMin")}
                defaultValue={null}
                className="border-0 border-r-[1px] bg-[#f7f7fb] py-3 pl-[65px] rounded-l-[14px] w-40"
              />
              <p className="absolute top-[25%] left-[25px]">From</p>
            </div>
            <div className="relative">
              <input
                type="number"
                name="mileageMax"
                {...register("mileageMax")}
                defaultValue={null}
                className="border-0 border-l-[1px] bg-[#f7f7fb] py-3 pl-[45px] rounded-r-[14px] w-40"
              />
              <p className="absolute top-[25%] left-[25px]">To</p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn px-11 py-[14px] h-[46px]">
          search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
