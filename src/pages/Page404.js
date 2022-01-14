import { Link } from "react-router-dom";
import "../styles/Page404.css";

const Page404 = () => {
  return (
    <>
      <p className="Page404_illustration">404</p>
      <p className="Page404_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div className="Page404_Wrapper-HomeLink">
        <Link className="Page404_HomeLink" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
};

export default Page404;
