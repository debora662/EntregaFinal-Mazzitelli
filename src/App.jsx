import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos!!!' />
    </div>
  )
}

export default App
