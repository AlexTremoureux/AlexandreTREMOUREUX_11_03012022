import Nav from "../components/Nav";
import Title from "../components/Title";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Nav />
    </div>
  );
};

export default Header;
