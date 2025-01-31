const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.img} />
      <a href={props.link}>
        <h1>{props.name}</h1>
      </a>
      <h3>
        Chef: {props.chefFirst} {props.chefLast}
      </h3>
      <h4>
        Cuisine: {props.cuisine} | Drink menu: {props.drinks}
      </h4>
      <h4>What I always order: {props.favDish}</h4>
      <h4>And to wash it down: {props.favDrink}</h4>
      <h4>Random fact: {props.funFact}</h4>
    </div>
  )
}

export default Restaurant
