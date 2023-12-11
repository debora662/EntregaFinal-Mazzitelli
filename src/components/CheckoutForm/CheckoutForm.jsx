import {useState} from "react";
import PropTypes from 'prop-types';

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,
            phone,
            email
        }
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleConfirm} className="max-w-md mx-auto mt-10 p-4 border rounded-md flex flex-col items-center mb-32 md:w-80 lg:w-[32rem]">
            <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500"/>
            </label>
            </div> 
            <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500"/>
            </label>
            </div>
            <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500"/>
            </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-3 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Crear Pedido</button>
        </form>
    )
}

CheckoutForm.propTypes = {
    onConfirm: PropTypes.func
};

export default CheckoutForm