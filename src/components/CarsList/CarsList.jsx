import { useState } from "react";
import Car from "../Car/Car";
import ModalWindow from "../ModalWindow/ModalWindow";

const CarsList = () => {
  const [car, setCar] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul>
        <Car setCar={setCar} setIsOpen={setIsOpen} />
      </ul>
      <ModalWindow
        car={car}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCar={setCar}
      />
    </>
  );
};
export default CarsList;
