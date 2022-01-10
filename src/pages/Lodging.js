import React from "react";
import DescriptionOfLocation from "../components/DescriptionOfLodging";
import Collapse from "../container/Collapse";
import data from "../data/lodgingList";
import Carousel from "../container/Carousel";

class Lodging extends React.Component {
  state = {
    isLoaded: false,
    data: [],
    error: true,
  };

  getLocationId = () => {
    const id = this.props.match.params.id;
    const itemToDisplay = data.find((location) => location.id === id);
    const locationIsFind = itemToDisplay.id === id;
    locationIsFind
      ? this.setState({
          isLoaded: true,
          data: itemToDisplay,
          error: false,
        })
      : this.setState({
          isLoaded: false,
          data: [],
          error: true,
        });
  };
  componentDidMount() {
    this.getLocationId();
  }

  render() {
    const { error, isLoaded, data } = this.state;

    return !isLoaded ? (
      <div>
        Chargement de la page en cours, veuillez patienter quelques instants. Si
        le problème persiste, merci de réactualiser la page...
      </div>
    ) : error ? (
      <div>
        Une erreur étrange est apparue... Merci de revenir sur la page d'accueil
      </div>
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
