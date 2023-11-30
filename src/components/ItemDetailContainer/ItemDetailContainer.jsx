import {useState, useEffect} from "react";
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../firebase/client";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {
                    id: response.id,
                    ...data
                }
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            })
            . finally(() => {
                setIsLoading(false);
            })
    }, [itemId]);

    return (
        <div>
            {
                isLoading
                    ? <Loading/>
                    : <ItemDetail {...product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;