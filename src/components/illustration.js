import "../styles/Illustration.css";

const Illustration = (props) => {
  return (
    <div
      className="illustration"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${props.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>{props.title}</h2>
    </div>
  );
};

export default Illustration;
