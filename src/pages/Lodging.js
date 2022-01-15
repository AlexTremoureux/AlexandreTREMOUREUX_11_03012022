import React, { useEffect, useState } from "react";
import DescriptionOfLocation from "../components/DescriptionOfLodging";
import Collapse from "../container/Collapse";
import Carousel from "../container/Carousel";
import Page404 from "./Page404";
import { useParams } from "react-router-dom";

const Lodging = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  let params = useParams();
  const id = params.id;

  /* itemToDisplay vient récupérer l'objet location.id correspondant à id et prend la valeur true,
   si pas de correspondance il n'est pas un objet et renvoie false */
  

  useEffect(() => {
    const getData = () => {
      const url = "..//data/lodgingList.json";
      return fetch(url)
        .then((response) => response.json())
        .then((arr) => {
          const itemToDisplay = arr.find((location) => location.id === id);
          const locationIsFind =
            itemToDisplay instanceof Object ? itemToDisplay.id === id : false;
          return locationIsFind ? setData(itemToDisplay) : setError(true);
        })
    };
    getData();
    // Nettoyage du state data lors du démontage du composant afin d'éviter
    return () => {
      setData({});
    };
  }, [id]);

  if (!data&&!error) {
    return <div>loading</div>;
  }
  return error ? (
    <>
      <Page404 />
    </>
  ) : (
    <>
      <Carousel imgBank={data.pictures} />
      <DescriptionOfLocation
        title={data.title}
        location={data.location}
        tags={data.tags}
        name={data.host.name}
        picture={data.host.picture}
        rating={data.rating}
      />
      <div className="Collapse-Section">
        <Collapse
          title={"Description"}
          id={`Description${data.id}`}
          description={data.description}
        />
        <Collapse
          title={"Équipements"}
          id={`Equipements${data.id}`}
          equipments={data.equipments}
        />
      </div>
    </>
  );
};

export default Lodging;
