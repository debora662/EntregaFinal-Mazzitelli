import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../firebase/client";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {   
        setIsLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, "productos"), where("categoria", "==", categoryId))
            : collection(db, "productos")

        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response
                    .docs
                    .map(doc => {
                        const data = doc.data()
                        return {
                            id: doc.id,
                            ...data
                        }
                    })
                setProducts(productosAdapted);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            })
            . finally(() => {
                setIsLoading(false);
            })
    }, [categoryId]);

    return (
        <div>
            <h1 className="text-4xl text-black font-bold mt-10 text-center">{greeting}</h1>
            {
                isLoading
                    ? <Loading/>
                    : <ItemList products={products}/>
            }
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string
};

export default ItemListContainer;