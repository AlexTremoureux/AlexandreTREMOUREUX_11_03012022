import Illustration from "../components/illustration";
import LodgingList from "../components/LodgingList";
import data from "../data/lodgingList";
import imgHomePage from "../assets/IMG.jpg";

const Home = () => {
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
