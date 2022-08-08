import pataconImg from "../assets/patacones.webp";
import pabellonImg from "../assets/pabellon.jpg";
import tresLechesImg from "../assets/tres-leches.jpg";

import MenuCard from "./MenuCard";

function Menu() {

  return (
    <section id="menu">
      <h3>Este es el menu de hoy</h3>

      <MenuCard foodImg={pataconImg} foodName={"Patacones"} color={"yellow"}/>
      <MenuCard foodImg={pabellonImg} foodName={"Pabellon Criollo"} color={"blue"}/>
      <MenuCard foodImg={tresLechesImg} foodName={"Pastel Tres Leches"} color={"red"}/>

      {/* <div className="card" style={cardStyles}>
        <p>Pabello Criollo</p>
        <img src={pabellonImg} alt="plato-fuerte" width={"200px"} />
      </div>

      <div className="card" style={cardStyles}>
        <p>Tres Leches</p>
        <img src={tresLechesImg} alt="postre" width={"200px"} />
      </div> */}
    </section>
  );
}

export default Menu;
