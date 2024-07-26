import { useState } from "react";
import Car from "../Car/Car";
import ModalWindow from "../ModalWindow/ModalWindow";

const CarsList = ({ cars }) => {
  const [car, setCar] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="flex flex-row flex-wrap gap-x-[29px] gap-y-[50px] mb-5 list_h">
        <Car setCar={setCar} setIsOpen={setIsOpen} cars={cars} />
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
