import {useContext} from "react";
import cart from "../../assets/cart.png";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <div className="indicator mr-5">
            <Link to="/cart" className="CartWidget">
                <img src={cart} className="w-9 h-9" alt="icono carrito"/>
                <span className="indicator-item badge badge-secondary mt-1">{totalQuantity}</span>
            </Link>
        </div>
    )
}

export default CartWidget;