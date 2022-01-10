import React from "react";
import { Link } from "react-router-dom";
import "../styles/Page404.css";

class Page404 extends React.Component {
  render() {
    return (
      <>
        <p className="Page404_illustration">404</p>
        <p className="Page404_message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="Page404_HomeLink" to="/">
          Retourner sur la page d'accueil
        </Link>
      </>
    );
  }
}
export default Page404;
