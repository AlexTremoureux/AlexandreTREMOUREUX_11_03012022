import React from "react";
import Illustration from "../components/illustration";
import imgAbout from "../assets/imgAbout.jpg";
import Collapse from "../components/Collapse";

const About = () => {
  const state = {
    Fiabilité:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    Respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Service:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    Sécurité:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En Laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.",
  };
  return (
    <>
      <Illustration imgSrc={imgAbout} title="" />
      <div className="Collapse-section_AboutPage">
        <Collapse
          title={"Fiabilité"}
          id={`Fiabilité`}
          description={state.Fiabilité}
        />
        <Collapse
          title={"Respect"}
          id={`Respect`}
          description={state.Respect}
        />
        <Collapse
          title={"Service"}
          id={`Service`}
          description={state.Service}
        />
        <Collapse
          title={"Sécurité"}
          id={`Sécurité`}
          description={state.Sécurité}
        />
      </div>
    </>
  );
};

export default About;
