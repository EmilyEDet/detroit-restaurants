const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <h3>
        Chef: {props.chefFirst} {props.banana}
      </h3>
      <h5>
        Cuisine | Food: {props.cuisine} Drinks: {props.drinks}
      </h5>
      <h5>Wallet Impact: {props.costLevel}</h5>
    </div>
  )
}

export default Restaurant
