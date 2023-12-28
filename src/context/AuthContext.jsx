import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/client";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;