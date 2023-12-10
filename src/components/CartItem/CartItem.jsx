import PropTypes from 'prop-types';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

const CartItem = ({id, image, nombre, quantity, subtotal}) => {
    const {removeItem} = useContext(CartContext)

    const removeProduct = () => {
        removeItem(id)
    }

    return (
        <div
            className="grid grid-cols-5 items-center justify-between p-4 bg-slate-200 sm:mx-2 md:mx-14 xl:mx-36 h-46 shadow-md">
            <div className="grid grid-cols-5 col-span-full items-center">
                <div className="col-span-1">
                    <img src={image} className="rounded-md w-24 mx-4" alt={nombre}/>
                </div>
                <div className="col-span-1">
                    <p className="text-md text-slate-950 mx-15">{nombre}</p>
                </div>
                <div className="col-span-1">
                    <p className="text-slate-950 ml-10">Subtotal: ${subtotal}</p>
                </div>
                <div className="col-span-1">
                    <p className="text-slate-950 sm:ml-8 xl:ml-14">Cantidad: {quantity}</p>
                </div>
                <div className="col-span-1">
                    <button
                        onClick={removeProduct}
                        className="bg-red-600 px-1.5 rounded text-white hover:text-black ml-14">X</button>
                </div>
            </div>          
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    quantity: PropTypes.number,
    subtotal: PropTypes.number
};

export default CartItem;