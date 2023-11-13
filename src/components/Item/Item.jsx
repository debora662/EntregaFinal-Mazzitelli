const Item = ({ id, nombre, precio, image }) => {
    return (
        <article className="max-w-sm bg-slate-50 rounded overflow-hidden shadow-lg hover:shadow-gray-500 flex flex-col items-center lg:w-60">
            <h2 className="font-bold text-slate-700 text-base my-2">
                {nombre}
            </h2>
            <picture>
                <img src={image} className="w-40" alt={nombre} />
            </picture>
            <section>
                <p className="font-bold text-slate-700 text-base my-2">
                    Precio: ${precio}
                </p>
            </section>
            <div>
                <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded mb-4">Ver detalle</button>
            </div>
        </article>
    )
}

export default Item