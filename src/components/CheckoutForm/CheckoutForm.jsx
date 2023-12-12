import {useState} from "react";
import PropTypes from 'prop-types';

const CheckoutForm = ({ onConfirm}) => {
    const [dataUser, setDataUser] = useState({
      name: '',
      phone: '',
      email: '',
    });
  
    const handleChangeInput = (event) => {
        console.log("HOLAAAA ESTOY EN LA FUNCION")
      const { name, value } = event.target;
      setDataUser((prevDatos) => ({
        ...prevDatos,
        [name]: value,
      }));
    };
  
    const handleConfirm = (event) => {
      event.preventDefault();
      onConfirm(dataUser);
    };
  
    return (
      <form onSubmit={handleConfirm} className="max-w-md mx-auto mt-10 p-4 border rounded-md flex flex-col items-center mb-32 md:w-80 lg:w-[32rem]">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={dataUser.name}
            onChange={handleChangeInput}
            className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={dataUser.phone}
            onChange={handleChangeInput}
            className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataUser.email}
            onChange={handleChangeInput}
            className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-3 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Confirmar</button>
      </form>
    );
  };
  
 

CheckoutForm.propTypes = {
    onConfirm: PropTypes.func
};

export default CheckoutForm