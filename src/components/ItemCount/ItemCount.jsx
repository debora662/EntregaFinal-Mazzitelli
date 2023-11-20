import { useState } from "react";
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)


    const increment = () => {
        quantity < stock ? setQuantity(quantity + 1) : null;
    }

    const decrement = () => {
        quantity > 1 ? setQuantity(quantity - 1) : null;
    }

    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <div className="flex items-center mb-4">
                <button onClick={increment} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">+</button>
                <h3 className="text-md text-black px-4 font-bold">{quantity}</h3>
                <button onClick={decrement} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2.5 rounded">-</button>
            </div>
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al Carrito</button>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number,
    initial: PropTypes.number,
    onAdd: PropTypes.func
  };

export default ItemCount;