import RouterPrincipal from './routers/RouterPrincipal';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <RouterPrincipal/>
            <ToastContainer />
        </div>
    )
}

export default App;
