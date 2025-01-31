import './App.css'
import data from './data.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'

const App = () => {
  console.log(data)
  return (
    <div className="App">
      <Header />
      <Main data={data} />
      <Footer />
    </div>
  )
}

export default App
