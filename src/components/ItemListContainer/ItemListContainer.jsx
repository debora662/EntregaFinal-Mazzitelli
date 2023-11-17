import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import getAllProducts from "../../controllers/getAllProducts";
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log("Hubo un error", error);
      })
  }, [])


  return (
    <main>
      <div>
        <h1 className="text-4xl text-black font-bold mt-10 text-center">{greeting}</h1>
        <ItemList products={products} />
      </div>
    </main>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string
};

export default ItemListContainer;