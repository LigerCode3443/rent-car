import CarsList from "../../components/CarsList/CarsList";

const Catalog = ({ setPage }) => {
  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <CarsList />
      <button type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};
export default Catalog;
