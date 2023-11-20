import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Footer from "../components/Footer/Footer"
import Error404 from "../components/Error/Error404";

function RouterPrincipal() {
    return (
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
    )
}

export default RouterPrincipal;
