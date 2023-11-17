import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemCount from './components/ItemCount/ItemCount'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detalle/:Id" element={<ItemDetailContainer />} />
        </Routes>
        {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
