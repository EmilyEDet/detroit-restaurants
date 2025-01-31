import Restaurant from './Restaurant'

const Main = (props) => {
  return (
    <main>
      <h1>Top 25</h1>
      {props.data.restaurants.map((restaurant) => (
        <Restaurant
          name={restaurant.name}
          chefFirst={restaurant.chef.first}
          banana={restaurant.chef.last}
          cuisine={restaurant.cuisine.food}
        />
      ))}
    </main>
  )
}

export default Main
