import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
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
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {
          <>
            <img src={car?.img} alt={car?.description} />
            <div>
              <p>{car?.make}</p>
              <p>{car?.model}</p>
              <p>{car?.year}</p>
              <p>{car?.rentalPrice}</p>
            </div>
            <div>
              <p>{car?.address}</p>
              <p>{car?.address}</p>
              <p>{car?.rentalCompany}</p>
              <p>Premium</p>
            </div>
            <div>
              <p>{car?.type}</p>
              <p>{car?.make}</p>
              <p>{car?.id}</p>
              <p>{car?.functionalities[0]}</p>

              <p>{car?.description}</p>
              <p>Accessories and Functionalities:</p>
              <div>
                {car?.accessories?.map((item, index) => (
                  <p key={item[index]}>{item}</p>
                ))}
              </div>
              <div>
                {car?.functionalities?.map((item, index) => (
                  <p key={item[index]}>{item}</p>
                ))}
              </div>
              <p>Rental Conditions:</p>
              <p>{car?.rentalConditions}</p>
              <p>Mileage:{car?.mileage.toLocaleString("en-US")}</p>
              <p>Price{car?.rentalPrice}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                closeModal();
              }}
            >
              close
            </button>
            <a href="tel:+380730000000">Rental car</a>
          </>
        }
      </Modal>
    </>
  );
};
export default ModalWindow;
