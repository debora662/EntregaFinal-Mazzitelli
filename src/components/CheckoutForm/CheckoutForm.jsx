import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {validateForm} from "./validation";

const CheckoutForm = ({onConfirm}) => {
    const [dataUser, setDataUser] = useState({name: '', phone: '', email: ''});

    const [confirmEmail, setConfirmEmail] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [formErrors, setFormErrors] = useState(
        {name: "", phone: "", email: "", confirmEmail: ""}
    );

    const handleChangeInput = (event) => {
        const {name, value} = event.target;

        setDataUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleChangeConfirmEmail = (event) => {
        const {value} = event.target;
        setConfirmEmail(value);
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        const {errors, isValid} = validateForm(dataUser, confirmEmail);

        setFormErrors(errors);

        if (isValid) {
            onConfirm(dataUser);
        } else {
            console.error("El formulario tiene errores. Por favor, corrigelos");
        }
    };

    useEffect(() => {
        const {errors} = validateForm(dataUser, confirmEmail);
        setFormErrors(errors);

        const areFieldsNotEmpty = Object
            .values(dataUser)
            .every(value => value !== "");
        setIsButtonEnabled(
            Object.values(errors).every(error => error === "") && areFieldsNotEmpty
        );
    }, [dataUser, confirmEmail]);

    return (
        <form
            onSubmit={handleConfirm}
            className="max-w-md mx-auto mt-10 p-4 border rounded-md flex flex-col items-center mb-32 md:w-80 lg:w-[32rem]">
            <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={dataUser.name}
                    onChange={handleChangeInput}
                    className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"/>
                <p className="text-red-500 text-sm">{formErrors.name}</p>
            </div>
            <div className="mb-4 w-full">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Teléfono:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={dataUser.phone}
                    onChange={handleChangeInput}
                    className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"/>
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
            </div>
            <div className="mb-4 w-full">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={dataUser.email}
                    onChange={handleChangeInput}
                    className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"/>
                <p className="text-red-500 text-sm">{formErrors.email}</p>
            </div>
            <div className="mb-4 w-full">
                <label
                    htmlFor="confirmEmail"
                    className="block text-gray-700 text-sm font-bold mb-2">
                    Confirmar Correo Electrónico:
                </label>
                <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={confirmEmail}
                    onChange={handleChangeConfirmEmail}
                    className="border-2 rounded-md w-full py-2 px-3 focus:outline-none bg-gray-200 focus:border-blue-500 text-gray-600"/> {
                    formErrors.confirmEmail && (
                        <p className="text-red-500 text-sm">{formErrors.confirmEmail}</p>
                    )
                }
            </div>
            <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 mt-3 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue ${
                isButtonEnabled
                    ? ""
                    : "opacity-50 cursor-not-allowed"}`}
                disabled={!isButtonEnabled}>
                Confirmar Compra
            </button>
        </form>
    );
};

CheckoutForm.propTypes = {
    onConfirm: PropTypes.func
};

export default CheckoutForm