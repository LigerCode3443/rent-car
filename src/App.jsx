import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { getCarsThunk } from "./rudex/cars/operations";
import { useDispatch } from "react-redux";

function App() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk(page));
  }, [dispatch, page]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog page={page} setPage={setPage} />}
          />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
