import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({cart: []});

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [
                ...prev, {
                    ...item,
                    quantity,
                    subtotal: item.precio * quantity
                }
            ]);
        } else {
            console.error("El producto ya fue agregado");
        }
    }

    const removeItem = (itemId) => {
        const itemIndex = cart.findIndex((prod) => prod.id === itemId);

        if (itemIndex !== -1) {
            const cartUpdated = [...cart];
            if (cartUpdated[itemIndex].quantity > 1) {
                cartUpdated[itemIndex].quantity -= 1;
                cartUpdated[itemIndex].subtotal -= cartUpdated[itemIndex].precio;
            } else {
                cartUpdated.splice(itemIndex, 1);
            }
            setCart(cartUpdated);
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    }

    const getTotalQuantity = () => {
        return cart.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                total: getTotal(),
                totalQuantity: getTotalQuantity()
            }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node
};

export default CartProvider;