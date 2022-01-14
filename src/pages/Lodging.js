import React, { useEffect, useState } from "react";
import DescriptionOfLocation from "../components/DescriptionOfLodging";
import Collapse from "../container/Collapse";
import datas from "../data/lodgingList";
import Carousel from "../container/Carousel";
import Page404 from "./Page404";

const Lodging = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const id = props.match.params.id;
  useEffect((id) => {
    const getLodging = () => {
      console.log(id)
      const itemToDisplay = datas.find((location) => location.id === id);
      const locationIsFind =
        itemToDisplay instanceof Object ? itemToDisplay.id === id : false;
      return locationIsFind ? setData(itemToDisplay) : setError(true);
    };
    getLodging(id);
    console.log(id);
  }, [id]);

  /* itemToDisplay vient récupérer l'objet location.id correspondant à id et prend la valeur true,
   si pas de correspondance il n'est pas un objet et renvoie false */
  

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
