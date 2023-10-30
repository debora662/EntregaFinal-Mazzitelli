import cart from "../assets/cart.png" 

const CartWidget = () => {
    return (
        <div className="indicator mr-5">
            <img src={cart} className="w-9 h-9" />
            <span className="indicator-item badge badge-secondary">0</span>            
        </div>
    )
}

export default CartWidget