import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../firebase/client";
import {useState} from "react";
import {Link} from 'react-router-dom';

const SingUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSingUp = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setShowSuccess(true);
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center my-32">
            <div className="bg-gray-50 p-8 shadow-md rounded-md w-96">
                {
                    showSuccess
                        ? (
                            <div>
                                <p className="text-green-500 text-center p-10 font-semibold">Cuenta creada exitosamente. ¡Bienvenido!</p>
                                <p className='text-sm text-center'>¡Gracias por registrarte! Ir a...<Link to="/" className='text-gray-500 ml-1 font-semibold'>Home</Link>
                                </p>
                            </div>
                        )
                        : (
                            <> < h2 className = "text-2xl font-semibold mb-4" > Crear Cuenta</h2> < form onSubmit = {
                                handleSingUp
                            }
                            autoComplete = 'on' > <div className="mb-4">
                                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                                    Correo electrónico:
                                </label>
                                <input
                                    className="w-full px-3 py-2 rounded-md bg-gray-200 focus:outline-none border-2 focus:border-blue-500 text-gray-700"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Correo electrónico..."
                                    value={email}
                                    autoComplete='email'
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600 text-sm font-medium mb-2"
                                    htmlFor="password">
                                    Contraseña:
                                </label>
                                <input
                                    className="w-full px-3 py-2 rounded-md bg-gray-200 focus:outline-none border-2 focus:border-blue-500 text-gray-700"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña..."
                                    value={password}
                                    autoComplete='contraseña'
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                type="submit">
                                Crear Cuenta
                            </button>
                        </form>
                    </>
                        )
                }
            </div>
        </div>
    )
}

export default SingUp;
