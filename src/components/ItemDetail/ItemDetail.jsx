import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, precio, stock, image, desc }) => {

    return (
        <div className="max-w-full md:max-w-4xl mx-auto bg-slate-50 rounded-xl overflow-hidden shadow-md my-20">
            <header className="md:flex my-10">
                <picture className="md:flex-shrink-0">
                    <img className="h-64 w-full object-contain md:w-50 mx-4" src={image} alt={nombre} />
                </picture>
                <section className="p-8 md:w-3/4">
                    <h2 className="uppercase tracking-wide text-xl text-black font-semibold">{nombre}</h2>
                    <p className="mt-2 text-black text-lg font-semibold">${precio}</p>
                    <p className="mt-2 text-black font-semibold"> Stock Disponible: {stock}</p>
                    <p className="mt-2 text-gray-600">{desc}</p>
                    <footer className="flex justify-center mt-8">
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
                    </footer>
                </section>
            </header>
        </div>
    )
}

export default ItemDetail;
