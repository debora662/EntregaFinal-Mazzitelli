import { useState, useEffect } from "react";
import { getProductById } from "../../async-mock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {    
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.log("Hubo un error", error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [itemId]);

  return (
    <div>
      {isLoading ? <Loading /> : <ItemDetail {...product} />}
    </div>
  )
}

export default ItemDetailContainer;