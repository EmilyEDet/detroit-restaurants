const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.img} />
      <h1>{props.name}</h1>
      <h3>
        Chef: {props.chefFirst} {props.chefLast}
      </h3>
      <h4>
        Cuisine | Food: {props.cuisine} Drinks: {props.drinks}
      </h4>
      <h4>What I always order: {props.favDish}</h4>
      <h4>And to wash it down: {props.favDrink}</h4>
    </div>
  )
}

export default Restaurant
