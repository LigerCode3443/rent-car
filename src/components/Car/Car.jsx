import { useSelector } from "react-redux";
import { selectCars } from "../../rudex/cars/selectors";

const Car = () => {
  const cars = useSelector(selectCars);
  return (
    <>
      {cars?.map((car) => {
        return (
          <li key={car.id}>
            <img src={car.img} alt={car.description} />
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.rentalPrice}</p>
          </li>
        );
      })}
    </>
  );
};
export default Car;
