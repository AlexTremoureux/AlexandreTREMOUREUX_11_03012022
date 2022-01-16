import React from "react";
import DescriptionOfLocation from "../components/DescriptionOfLodging";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Page404 from "./Page404";
import { useParams } from "react-router-dom";
import { url } from "../constantes";
import { useFetchItemById } from "../query";

const Lodging = () => {
  let params = useParams();
  const id = params.id;
  const { data, isLoading, error } = useFetchItemById(url, id);

  if (error) {
    return (
      <>
        <Page404 />
      </>
    );
  }
  return isLoading ? (
    <div>Is Loading</div>
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
