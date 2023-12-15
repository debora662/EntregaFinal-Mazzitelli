import {useState, useEffect} from "react";
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../firebase/client";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data()
                    const productAdapted = {
                        id: response.id,
                        ...data
                    }
                    setProduct(productAdapted);
                } else {
                    setError("Producto no encontrado");
                }
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
                setError("Error al obtener los datos del producto")
            })
            . finally(() => {
                setIsLoading(false);
            })
    }, [itemId]);

    return (
        <div>
            {isLoading && <Loading/>}
            {
                error && <p
                        className="border-b-2 p-4 bg-slate-200 mx-36 h-52 rounded-md shadow-md my-40 flex justify-center items-center text-slate-700">{error}</p>
            }
            {product && <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer;