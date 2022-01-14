import LegalNotice from "../components/LegalNotice";
import LogoWhite from "../components/LogoWhite";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <LogoWhite />
      <LegalNotice />
    </div>
  );
};

export default Footer;
