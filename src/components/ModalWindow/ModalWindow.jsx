import Modal from "react-modal";
import SvgExit from "../SvgExit/SvgExit";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "0",
  },
  overlay: { backgroundColor: "rgba(40, 40, 40, 0.75)" },
};

const ModalWindow = ({ car, isOpen, setIsOpen, setCar }) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const closeModal = () => {
    setIsOpen(false);
    setCar(null);
  };

  const age = car?.rentalConditions.split("\n")[0].split(":")[1];
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {
          <div className="p-10 w-[541px] rounded-3xl relative">
            <img
              src={car?.img}
              alt={car?.description}
              className="w-100% rounded-[14px] mb-[14px] min-w-[461px] max-h-[248px]"
            />
            <ul className="flex flex-row gap-1 mb-2">
              <li>{car?.make}</li>
              <li className="text-[#3470ff]">{car?.model},</li>
              <li>{car?.year}</li>
            </ul>
            <div className="text-xs text-stone-400 mb-[14px]">
              <ul className="list flex gap-3 items-center">
                <li>{car?.address.split(",")[1]}</li>
                <li>{car?.address.split(",")[2]}</li>
                <li>Id: {car?.id}</li>
                <li>Type: {car?.type}</li>
              </ul>
              <ul className="list flex gap-3 ">
                <li>Fuel Consumption: {car?.fuelConsumption}</li>
                <li>Engine Size: {car?.engineSize}</li>
              </ul>
            </div>
            <p className="text-sm font-normal mb-6">{car?.description}</p>
            <p className="text-sm font-medium">
              Accessories and Functionalities:
            </p>
            <ul className="list flex flex-wrap gap-x-3 text-stone-400 text-xs mb-6">
              {car?.accessories?.map((item, index) => (
                <li key={item[index]}>{item}</li>
              ))}
              {car?.functionalities?.map((item, index) => (
                <li key={item[index]}>{item}</li>
              ))}
            </ul>
            <ul className="list flex flex-wrap gap-x-3 text-stone-400 text-sm"></ul>
            <p className="text-sm font-medium">Rental Conditions:</p>
            <ul className="flex flex-wrap gap-2 text-sm mb-6">
              <li className="px-[14px] py-[7px] bg-[#f9f9f9] rounded-[35px]">
                Minimum age: <span className="text-[#3470ff]">{age}</span>
              </li>
              {car?.rentalConditions
                .split("\n")
                .filter((item, index) => index !== 0)
                .map((item) => (
                  <li
                    key={item}
                    className="px-[14px] py-[7px] bg-[#f9f9f9] rounded-[35px]"
                  >
                    {item}
                  </li>
                ))}
              <li className="px-[14px] py-[7px] bg-[#f9f9f9] rounded-[35px]">
                Mileage:{" "}
                <span className="text-[#3470ff]">
                  {car?.mileage.toLocaleString("en-US")}
                </span>
              </li>
              <li className="px-[14px] py-[7px] bg-[#f9f9f9] rounded-[35px]">
                Price:{" "}
                <span className="text-[#3470ff]">{car?.rentalPrice}</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => {
                closeModal();
              }}
              className="absolute top-4 right-4"
            >
              <SvgExit />
            </button>
            <a
              href="tel:+380730000000"
              className="btn px-[50px] py-3 inline-block w-[168px]"
            >
              Rental car
            </a>
          </div>
        }
      </Modal>
    </>
  );
};
export default ModalWindow;
