import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../rudex/cars/slice";
import SvgHard from "../SvgHard/SvgHard";
import { selectFavoritesCar } from "../../rudex/cars/selectors";

const Car = ({ cars, setCar, setIsOpen }) => {
  const favorites = useSelector(selectFavoritesCar);
  const dispatch = useDispatch();
  const handleModal = (car) => {
    setCar(car);
    setIsOpen(true);
  };
  return (
    <>
      {cars?.map((car) => {
        return (
          <li
            key={car?.id}
            className="w-[274px] relative flex flex-col justify-between"
          >
            <div className="mb-7">
              <img
                src={car?.img}
                alt={car?.description}
                className="rounded-[14px] min-h-[268px] mb-[14px]"
              />
              <div className="flex justify-between mb-2">
                <ul className="flex flex-wrap gap-1">
                  <li>{car?.make}</li>
                  <li className="text-[#3470ff]">{car?.model},</li>
                  <li>{car?.year}</li>
                </ul>
                <p>{car.rentalPrice}</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-slate-500">
                <ul className="flex gap-3 list">
                  <li className="">{car.address.split(",")[1]}</li>
                  <li>{car.address.split(",")[2]}</li>
                  <li>{car.rentalCompany}</li>
                </ul>
                <ul className="flex flex-wrap gap-x-3 list">
                  <li>{car.type}</li>
                  <li>{car.make}</li>
                  <li>{car.id}</li>
                  <li>{car.functionalities[0]}</li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                dispatch(toggleLike(car));
              }}
              className="absolute top-[16px] right-[15px]"
            >
              {favorites.some((item) => item.id === car.id) ? (
                <SvgHard color={"#3470FF"} colorFill={"#3470FF"} />
              ) : (
                <SvgHard color={"white"} />
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                handleModal(car);
              }}
              className="btn w-[100%] py-3"
            >
              Learn more
            </button>
          </li>
        );
      })}
    </>
  );
};
export default Car;
