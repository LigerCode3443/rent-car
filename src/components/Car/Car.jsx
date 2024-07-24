import { useSelector } from "react-redux";
import { selectCars } from "../../rudex/cars/selectors";

const Car = ({ setCar, setIsOpen }) => {
  const cars = useSelector(selectCars);
  const handleModal = (car) => {
    setCar(car);
    setIsOpen(true);
  };
  return (
    <>
      {cars?.map((car) => {
        return (
          <li key={car.id}>
            <img src={car?.img} alt={car.description} />
            <div>
              <p>{car.make}</p>
              <p>{car.model}</p>
              <p>{car.year}</p>
              <p>{car.rentalPrice}</p>
            </div>
            <div>
              <p>{car.address}</p>
              <p>{car.address}</p>
              <p>{car.rentalCompany}</p>
              <p>Premium</p>
            </div>
            <div>
              <p>{car.type}</p>
              <p>{car.make}</p>
              <p>{car.id}</p>
              <p>{car.functionalities[0]}</p>
            </div>
            <button>d</button>
            <button
              type="button"
              onClick={() => {
                handleModal(car);
              }}
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
