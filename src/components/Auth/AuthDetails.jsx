import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase/client";
import { useState, useEffect } from "react";

const AuthDetails = () => {  
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {            
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return unsubscribe;
    }, []);
         

    return (
        <div>
            {
                authUser ? (                        
                        <p className="text-red-500">Hola, {authUser.email}</p>
                    )
                    : (                        
                        <p className="text-blue-800">Usuario no registrado!!!</p>
                    )}
        </div>
    );
}

export default AuthDetails;