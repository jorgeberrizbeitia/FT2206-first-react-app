

function Message(props) {

  console.log(props)

  // let stringToRepeat = props.children.repeat(props.num)

  let stringToRepeat = ""

  for(let i = 0; i < props.num; i++) {
    stringToRepeat += props.children
  }

  return (
    <div>
      <p>{stringToRepeat}</p>
    </div>
  )

}

export default Message