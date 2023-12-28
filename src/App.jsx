import RouterPrincipal from './routers/RouterPrincipal';
import AuthProvider from './context/AuthContext';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <AuthProvider>
            <RouterPrincipal/>
            <ToastContainer />
        </AuthProvider>
    )
}

export default App;
