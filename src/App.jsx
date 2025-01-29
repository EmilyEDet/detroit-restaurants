import './App.css'
import data from './data.json'
import Restaurant from './components/Restaurant.jsx'

const App = () => {
  console.log(data)
  return (
    <div className="App">
      <h1>Favorite Detroit Restaurants</h1>
      {data.restaurants.map((restaurant) => (
        <Restaurant />
      ))}
    </div>
  )
}

export default App
