import {createContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

export const CartContext = createContext({cart: []});

const CartProvider = ({children}) => {
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [
                ...prev, {
                    ...item,
                    quantity,
                    subtotal: item.precio * quantity
                }
            ]);

            toast.info(`¡Producto ${item.nombre} fue agregado al carrito!`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,  
                icon: '😁',  
                theme: 'light',            
                style: {                    
                    fontWeight: 'bold',                                     
                  },                  
              });
        } else {
            console.error("El producto ya fue agregado");            
        }
    };

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
    children: PropTypes.node,
  };

export default CartProvider;