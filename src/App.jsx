import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />      
      <ItemListContainer greeting='Bienvenidos!!!' />
      {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} /> */}
      <Footer />
    </div>
  )
}

export default App
