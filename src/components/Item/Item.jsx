import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import numeral from 'numeral';
import 'numeral/locales/es';
import { useState } from "react";

const Item = ({id, nombre, precio, image}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    return (
        <article
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-gray-500 flex flex-col items-center mx-auto">
            <header>
                <h2 className="font-bold text-slate-700 text-base my-2">
                    {nombre}
                </h2>
            </header>
            <picture>
                {!imageLoaded && (<div className="skeleton w-40 h-[11.5rem]"></div>)}
                <img
                    src={image}
                    className={`w-40 object-cover ${imageLoaded
                        ? 'opacity-100'
                        : 'opacity-0'}`}
                    alt={nombre}
                    onLoad={handleImageLoad}/>
            </picture>
            <section>
                <p className="font-bold text-slate-700 text-base my-4">
                    Precio: {numeral(precio).format('$0,0')}
                </p>
            </section>
            <footer>
                <div className="mb-6">
                    <Link
                        to={`/item/${id}`}
                        className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded mb-4">Ver detalle</Link>
                </div>
            </footer>
        </article>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    image: PropTypes.string
};

export default Item;