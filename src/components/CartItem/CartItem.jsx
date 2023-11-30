const CartItem = ({image, nombre, precio, quantity}) => {

    return (
        <div
            className="grid grid-cols-4 items-center justify-between border-b-2 p-4 bg-slate-200 mx-36 h-52 rounded-md shadow-md">
            <div className="col-span-1">
                <img src={image} className="rounded-md w-28 mx-4"/>
            </div>
            <div className="col-span-1">                
                <p className="text-lg text-slate-950 mx-15">{nombre}</p>
            </div>
            <div className="col-span-1">
                <p className="text-slate-950 my-4 mx-10">Subtotal: ${precio}</p>
            </div>
            <div className="col-span-1 flex items-center">
                <p className="text-slate-950">Cantidad: {quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;