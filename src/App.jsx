import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { getCarsThunk, getModelThunk } from "./rudex/cars/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "./rudex/cars/selectors";
import { totalPage } from "./rudex/cars/slice";

function App() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk(page))
      .unwrap()
      .then(dispatch(getModelThunk()), dispatch(totalPage()));
  }, [dispatch, page]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
