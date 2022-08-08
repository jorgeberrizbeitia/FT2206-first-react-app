function Details(props) {
  // ejemplo de destructuracion anidada en parametros: {user: {name, hobby}}
  // const {name, hobby} = props.user

  return (
    <div>

      <p>Nombre: {props.user.name} </p>
      <p>Hobby: {props.user.hobby} </p>

    </div>
  )

}


export default Details