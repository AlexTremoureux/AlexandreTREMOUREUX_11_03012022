import Illustration from "../components/illustration";
import LodgingList from "../components/LodgingList";
import imgHomePage from "../assets/IMG.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = () => {
      const url = "..//data/lodgingList.json";
      return fetch(url)
        .then((response) => response.json())
        .then((arr) => setData(arr));
    };
    getData();
    // Nettoyage du state data lors du démontage du composant
    return () => {
      setData({});
    };
  }, []);

  return (
    <>
      <Illustration
        imgSrc={imgHomePage}
        title="Chez vous, partout et ailleurs"
      />
      <LodgingList data={data} />
    </>
  );
};

export default Home;
