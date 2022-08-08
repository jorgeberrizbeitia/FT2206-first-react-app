import Details from "../components/Details"
import Message from "../components/Message"
import ReactPlayer from 'react-player'

function Test() {

  const person1 = {
    name: "bob",
    hobby: "cocinar"
  }

  const person2 = {
    name: "patricio",
    hobby: "atrapar medusas" 
  }


  return (
    <div>

      <h3>Pagina para practicar props</h3>

      <Details user={person1} />
      <Details user={person2} />

      <hr />

      <Message num={5}>Hola</Message>
      <Message num={10}>Adios</Message>

      <hr />

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

    </div>
  )

}

export default Test