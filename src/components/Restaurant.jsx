const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <h3>
        Chef: {props.chefFirst} {props.chefLast}
      </h3>
      <h5>Cuisine: {props.cuisine}</h5>
    </div>
  )
}

export default Restaurant
