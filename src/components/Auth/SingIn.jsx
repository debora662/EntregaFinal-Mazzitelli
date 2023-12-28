
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase/client";
import { useState } from "react";
import AuthDetails from "./AuthDetails";


const SingIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSingIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div>
        <AuthDetails/>
    <div className="flex items-center justify-center my-32">
            <div className="bg-gray-50 p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSingIn}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                            Correo electrónico:
                        </label>
                        <input
                            className="w-full px-3 py-2 rounded-md bg-gray-200 focus:outline-none border-2 focus:border-blue-500 text-gray-700"
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            value={email}
                            autoComplete='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
                            Contraseña:
                        </label>
                        <input
                            className="w-full px-3 py-2 rounded-md bg-gray-200 focus:outline-none border-2 focus:border-blue-500 text-gray-700"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            autoComplete='contraseña'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>                  
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        type="submit"                        
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
        </div>
  )
}

export default SingIn;
