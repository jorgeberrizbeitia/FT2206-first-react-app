function MenuCard(props) {

  const { color, foodName, foodImg } = props

  const cardStyles = {
    border: "solid 3px black",
    borderRadius: "30px",
    padding: "10px",
    margin: "10px",
    height: "300px",
    backgroundColor: color
  };

  return (
    <div className="card" style={cardStyles}>
        <p>{foodName}</p>
        <img src={foodImg} alt="entrada" width="200px" />
      </div>
  )

}

export default MenuCard