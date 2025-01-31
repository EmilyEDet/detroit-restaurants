import Restaurant from './Restaurant'

const Main = (props) => {
  return (
    <main>
      <h1>Top 25</h1>
      {props.data.restaurants.map((restaurant) => (
        <Restaurant
          img={restaurant.image}
          name={restaurant.name}
          chefFirst={restaurant.chef.first}
          chefLast={restaurant.chef.last}
          cuisine={restaurant.cuisine.food}
          drinks={restaurant.cuisine.drinks}
          favDish={restaurant.favDish}
          favDrink={restaurant.favDrink}
        />
      ))}
    </main>
  )
}

export default Main
