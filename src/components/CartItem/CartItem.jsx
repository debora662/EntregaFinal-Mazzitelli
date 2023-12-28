import PropTypes from 'prop-types';
import numeral from 'numeral';
import 'numeral/locales/es';
import {useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext';

const CartItem = ({id, image, nombre, quantity, subtotal}) => {
    const {removeItem} = useContext(CartContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    const removeProduct = () => {
        removeItem(id)
    }

    return (
        <div
            className="grid grid-cols-5 items-center justify-between p-4 bg-slate-200 sm:mx-1 md:mx-14 xl:mx-36 h-46 shadow-md">
            <div
                className="grid grid-cols-5 col-span-full items-center lg:place-items-center">
                <div className="col-span-1">
                {!imageLoaded && <div className="skeleton w-24 h-24 rounded-md"></div>}
                <img
                    src={image}
                    className={`rounded-md w-24 ${imageLoaded ? '' : 'hidden'}`}
                    alt={nombre}
                    onLoad={handleImageLoad}
                />
                </div>
                <div className="col-span-1 sm:text-center">
                    <p className="text-md text-slate-950 sm:text-sm md:text-base">{nombre}</p>
                </div>
                <div className="col-span-1 sm:text-center">
                    <p className="text-slate-950 ml-8 sm:text-sm md:text-base">Subtotal: {numeral(subtotal).format('$0,0')}</p>
                </div>
                <div className="col-span-1">
                    <p className="text-slate-950 sm:ml-8 text-sm md:text-base">Cantidad: {quantity}</p>
                </div>
                <div className="col-span-1 min-w-fit">
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