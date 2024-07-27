import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { selectSelect } from "../../rudex/cars/selectors";
import { filterCars } from "../../rudex/filterCars/slice";

const customStyles = (isMenuOpenModel) => ({
  control: (provided) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    width: "224px",
    padding: "6px 8px 6px 10px",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    overflow: " hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3470ff" : "white",
    color: state.isSelected ? "white" : "rgba(18, 20, 23, 0.2)",
    fontWeight: "500",
    fontSize: "16px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    transition: "transform 0.3s",
    transform: isMenuOpenModel ? "rotate(180deg)" : "rotate(0deg)",
    color: "black",
  }),
});
const customStylesPrice = (isMenuOpen) => ({
  control: (provided) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    width: "125px",
    padding: "6px 8px 6px 10px",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    overflow: " hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3470ff" : "white",
    color: state.isSelected ? "white" : "rgba(18, 20, 23, 0.2)",
    fontWeight: "500",
    fontSize: "16px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    transition: "transform 0.3s",
    transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
    color: "black",
  }),
});

export const SearchBar = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const search = useSelector(selectSelect);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenMode, setIsMenuOpenModel] = useState(false);

  const model = search.map((item) => item.make).toSorted();
  const md = ["All models", ...model];
  const price = search.map((item) => item.rentalPrice);
  const optionsModel = [...new Set(md)];
  const optionsPrice = [...new Set(price)]
    .map((item) => Number(item.replace("$", "")))
    .toSorted((a, b) => a - b);
  const sel = optionsModel.map((mod) => {
    return { value: mod, label: mod };
  });
  const selPrice = optionsPrice.map((pri) => {
    return { value: `$${pri}`, label: pri };
  });
  const maxPrice = [{ value: "", label: "All" }, ...selPrice];

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
        <label className="flex flex-col ">
          <span className="text-[#8a8a89] text-sm mb-2"> Car brand</span>
          <Controller
            name="make"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                defaultValue={{ value: "", label: "All models" }}
                options={sel}
                onChange={(selectedOption) => onChange(selectedOption.value)}
                styles={customStyles(isMenuOpenMode)}
                onBlur={onBlur}
                value={sel.find((option) => option.value === value)}
                onMenuOpen={() => {
                  setIsMenuOpenModel(true);
                }}
                onMenuClose={() => {
                  setIsMenuOpenModel(false);
                }}
              />
            )}
          />
        </label>
        <label className="flex flex-col">
          <span className="text-[#8a8a89] text-sm mb-2"> Price / 1 hour</span>
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                defaultValue={{ value: "", label: "All" }}
                options={maxPrice}
                onChange={(selectedOption) => onChange(selectedOption.value)}
                styles={customStylesPrice(isMenuOpen)}
                onBlur={onBlur}
                value={sel.find((option) => option.value === value)}
                onMenuOpen={() => {
                  setIsMenuOpen(true);
                }}
                onMenuClose={() => {
                  setIsMenuOpen(false);
                }}
              />
            )}
          />
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
