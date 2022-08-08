import pataconImg from "../assets/patacones.webp";
import pabellonImg from "../assets/pabellon.jpg";
import tresLechesImg from "../assets/tres-leches.jpg";

function Menu() {
  const cardStyles = {
    border: "solid 3px black",
    borderRadius: "30px",
    padding: "10px",
    margin: "10px",
    height: "300px",
  };

  return (
    <section id="menu">
      <h3>Este es el menu de hoy</h3>

      <div className="card" style={cardStyles}>
        <p>Patacones</p>
        <img src={pataconImg} alt="entrada" width="200px" />
      </div>

      <div className="card" style={cardStyles}>
        <p>Pabello Criollo</p>
        <img src={pabellonImg} alt="plato-fuerte" width={"200px"} />
      </div>

      <div className="card" style={cardStyles}>
        <p>Tres Leches</p>
        <img src={tresLechesImg} alt="postre" width={"200px"} />
      </div>
    </section>
  );
}

export default Menu;
