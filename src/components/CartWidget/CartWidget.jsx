import cart from "../../assets/cart.png"; 

const CartWidget = () => {
    return (
        <div className="indicator mr-5">
            <img src={cart} className="w-9 h-9" alt="icono carrito" />
            <span className="indicator-item badge badge-secondary mt-1">0</span>            
        </div>
    )
}

export default CartWidget;