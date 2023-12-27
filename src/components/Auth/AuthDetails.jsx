import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase/client";

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
        return() => unsubscribe();
    }, []);

    return (
        <div>
            {
                authUser
                    ? (                        
                        <p>Hola, {authUser.email}!!!</p>
                    )
                    : (                        
                        <p>No hay un usuario autenticado.</p>
                    )
            }
        </div>
    );
}

export default AuthDetails;