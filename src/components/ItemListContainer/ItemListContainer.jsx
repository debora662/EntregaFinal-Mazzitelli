import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';
import useFetchData from '../../customHook/FetchData';

const ItemListContainer = ({ greeting }) => {
  const apiUrl = "https://api.mockfly.dev/mocks/03682ae5-1697-4466-835f-3c6f06ba02b1/products";
  const { data, error } = useFetchData(apiUrl);

  return (
    <main>
      <div>
        <h1 className="text-4xl text-black font-bold mt-10 text-center">{greeting}</h1>
        {error && <div>Error: {error}</div>}
        {data.length === 0 && !error && <div>Cargando...</div>}
        {data.length > 0} <ItemList products={data} />
      </div>
    </main>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string
};

export default ItemListContainer;