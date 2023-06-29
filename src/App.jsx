import { useState, useEffect } from "react";
import { fetchData } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFoud from "./pages/404/PageNotFound";


function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataconfiguration();
  }, []);

  const getDataconfiguration = () => {
    fetchData("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + 'original',
          poster: res.images.secure_base_url + 'original',
          profile: res.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFoud />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
