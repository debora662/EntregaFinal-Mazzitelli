import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://api.mockfly.dev/mocks/03682ae5-1697-4466-835f-3c6f06ba02b1/products")
      .then(response => {
        const limitedProducts = response.data.slice(0, 24);
        setProducts(limitedProducts);
        setIsLoading(false)
      })
      .catch(error => window.alert(error.message));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-black font-bold mt-10 text-center">{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string
};

export default ItemListContainer