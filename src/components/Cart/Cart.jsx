import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";
import numeral from 'numeral';
import 'numeral/locales/es';
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div
                className="border-b-2 p-4 bg-slate-200 sm:mx-20 md:mx-36 h-60 rounded-md shadow-md my-40 flex justify-center items-center">
                <h1 className="text-slate-500">No hay productos en el carrito</h1>
                <div>
                    <Link to="/" className="text-blue-500 underline ml-2">Ir a Productos</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="my-40">
            {cart.map((p) => <CartItem key={p.id} {...p} subtotal={p.subtotal}/>)}
            <div className="flex justify-end mt-3 sm:mr-2 md:mr-16 lg:mr-14 xl:mr-36">
                <h3 className="text-black font-bold text-2xl">Total: {numeral(total).format('$0,0')}</h3>
            </div>
            <div
                className="flex flex-row justify-start sm:ml-1 md:ml-14 lg:ml-18 xl:ml-36 mt-16">
                <button
                    onClick={() => clearCart()}
                    className="bg-blue-600 rounded p-1.5 hover:bg-blue-800 text-white mr-10">Limpiar Carrito</button>
                <Link
                    to="/checkout"
                    className="bg-blue-600 rounded p-1.5 hover:bg-blue-800 text-white">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;