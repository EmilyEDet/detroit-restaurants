const Restaurant = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.img} />
      <a href={props.link}>
        <h1>{props.name}</h1>
      </a>
      <h3>
        <strong>Chef:</strong> {props.chefFirst} {props.chefLast}
      </h3>
      <h4>
        <strong>Cuisine:</strong> {props.cuisine} <strong>| Drink menu:</strong>{' '}
        {props.drinks}
      </h4>
      <h4>
        <strong>What I always order:</strong> {props.favDish}
      </h4>
      <h4>
        <strong>And to wash it down:</strong> {props.favDrink}
      </h4>
      <h4>
        <strong>Random fact:</strong> {props.funFact}
      </h4>
    </div>
  )
}

export default Restaurant
