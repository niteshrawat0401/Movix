import { useState, useEffect } from "react";
import { fetchData } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchData("/movie/popular").then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
    .catch((err)=>{
      console.log(err);
    })
      
  };

  


  return <div className="App">App</div>;
}

export default App;
