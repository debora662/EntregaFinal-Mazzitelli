import { useState, useEffect } from "react";
import getProductById from "../../controllers/getProductById";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
 const [product, setProduct] = useState(null)
 const {Id} = useParams()   


useEffect(() => {  
  getProductById(Id)
  .then(response => {    
    setProduct(response)
  })
  .catch(error => {
    console.log("Hubo un error", error);
  })    
}, [Id])

  return (
    <div>
      <ItemDetail {... product} />
    </div>
  )
}

export default ItemDetailContainer;