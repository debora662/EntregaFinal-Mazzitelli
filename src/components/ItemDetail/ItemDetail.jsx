import ItemCount from "../ItemCount/ItemCount";
import PropTypes from 'prop-types';
import numeral from 'numeral';
import 'numeral/locales/es';
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({nombre,id,precio,stock,image,descripcion}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            image,
            nombre,
            precio
        }

        addItem(item, quantity)
    }

    return (
        <div
            className="max-w-full md:max-w-4xl mx-auto bg-slate-200 rounded-xl overflow-hidden shadow-md mt-20 mb-40">
            <header className="md:flex my-10">
                <picture className="md:flex-shrink-0">
                    <img
                        className="sm:h-52 md:h-60 w-full object-contain md:w-50 mx-4"
                        src={image}
                        alt={nombre}/>
                </picture>
                <section className="p-8 md:w-3/4">
                    <h2 className="uppercase tracking-wide text-xl text-black font-semibold">{nombre}</h2>
                    <p className="mt-2 text-black text-lg font-semibold">{numeral(precio).format('$0,0')}</p>
                    <p className="mt-2 text-black font-semibold">
                        Stock Disponible: {stock}</p>
                    <p className="mt-2 text-gray-600">{descripcion}</p>
                    <footer className="flex justify-center mt-8 min-h">
                        {
                            quantityAdded > 0
                                ? (
                                    <Link
                                        to="/cart"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-16">Terminar Compra</Link>
                                )
                                : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
                        }
                    </footer>
                </section>
            </header>
        </div>
    )
}

ItemDetail.propTypes = {
    nombre: PropTypes.string,
    id: PropTypes.string,
    precio: PropTypes.number,
    stock: PropTypes.number,
    image: PropTypes.string,
    descripcion: PropTypes.string
};

export default ItemDetail;