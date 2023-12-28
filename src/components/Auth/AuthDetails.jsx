import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {signOut, getAuth} from 'firebase/auth';

const AuthDetails = () => {
    const {authUser} = useContext(CartContext);
    const auth = getAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div>
            {
                authUser && (
                    <div className="flex items-center justify-center my-40">
                        <div
                            className="border-2 bg-gray-50 p-8 shadow-md rounded-md w-96 h-44 flex flex-col items-center justify-center">
                            <p className="text-pink-500 text-center mb-4 font-semibold">¡Hola, bienvenido de nuevo!</p>
                            <p className="text-gray-600 text-center">{authUser.email}</p>
                            <button
                                onClick={handleSignOut}
                                className='mt-8 px-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300'>
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                )                
            }
        </div>
    );
}

export default AuthDetails;