import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/client";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Footer from "../components/Footer/Footer"
import Error404 from "../components/Error/Error404";
import CartProvider from "../context/CartContext";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import SingIn from "../components/Auth/SingIn";
import SingUp from "../components/Auth/SingUp";

const RouterPrincipal = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, () => {});
        return() => unsubscribe();
    }, []);

    return (
        <Router>
            <CartProvider >
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting = 'Bienvenidos' />}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                    <Route path="/singin" element={<SingIn />}/>
                    <Route path="/singup" element={<SingUp />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/checkout" element={<Checkout />}/>
                    <Route path="*" element={<Error404 />}/>
                </Routes>
                <Footer/>
            </CartProvider >
        </Router>
    )
}

export default RouterPrincipal;
