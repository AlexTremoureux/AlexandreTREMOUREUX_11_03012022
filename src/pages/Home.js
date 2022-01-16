import Illustration from "../components/illustration";
import LodgingList from "../container/LodgingList";
import imgHomePage from "../assets/IMG.jpg";
import { url } from "../constantes";
import { useFetch } from "../query";
import Page404 from "./Page404";

const Home = () => {
  const { data, isLoading, error } = useFetch(url);

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
      <Illustration
        imgSrc={imgHomePage}
        title="Chez vous, partout et ailleurs"
      />
      <LodgingList data={data} />
    </>
  );
};

export default Home;
