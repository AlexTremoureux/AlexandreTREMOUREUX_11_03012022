import LOGOW from "../assets/LOGOW.svg";

const LogoWhite = () => {
  const logo_Kasa = <img src={LOGOW} alt="logo Kasa" className="kasa-logo" />;

  return <h1 className="kasa_banner">{logo_Kasa}</h1>;
};

export default LogoWhite;
