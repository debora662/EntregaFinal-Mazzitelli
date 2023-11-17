import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import getAllProducts from "../../controllers/getAllProducts";
import getCategoryById from '../../controllers/getCategoryById';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const asynFunc = categoryId ? getCategoryById : getAllProducts;
    asynFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.log("Hubo un error", error);
      })
  }, [categoryId])

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