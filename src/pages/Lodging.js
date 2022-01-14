import React from "react";
import DescriptionOfLocation from "../components/DescriptionOfLodging";
import Collapse from "../container/Collapse";
import data from "../data/lodgingList";
import Carousel from "../container/Carousel";
import Page404 from "./Page404";

class Lodging extends React.Component {
  state = {
    isLoaded: false,
    data: [],
    error: true,
  };

  /* itemToDisplay vient récupérer l'objet location.id correspondant à id et prend la valeur true,
   si pas de correspondance il n'est pas un objet et renvoie false */
  getLocationId = () => {
    const id = this.props.match.params.id;
    const itemToDisplay = data.find((location) => location.id === id);
    const locationIsFind = itemToDisplay instanceof Object? itemToDisplay.id === id: false;
    
    locationIsFind
      ? this.setState({
          data: itemToDisplay,
          error: false,
        })
      : this.setState({
          data: [],
          error: true,
        });
  };
  componentDidMount() {
    this.getLocationId();
  }

  render() {
    const { error, data } = this.state;

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
  }
}
export default Lodging;
