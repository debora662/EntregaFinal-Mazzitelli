const CartItem = ({id, nombre, precio, quantity}) => {
    return (
        <div className="flex items-center justify-between border-b-2 p-4">
        <div className="flex-1">
          <p className="text-lg font-semibold">{nombre}</p>
          <p className="text-gray-500">Subtotal: ${precio}</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-700">Cantidad: {quantity}</p>          
        </div>
      </div>
    );
  };  

export default CartItem;