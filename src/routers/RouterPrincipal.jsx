import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Footer from "../components/Footer/Footer"
import Error404 from "../components/Error/Error404";
import CartProvider from "../context/CartContext";

function RouterPrincipal() {
    return (
        <CartProvider >
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
        </CartProvider >
    )
}

export default RouterPrincipal;
