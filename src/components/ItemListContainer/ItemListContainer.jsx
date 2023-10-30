import PropTypes from 'prop-types';

const ItemListContainer = ({ saludo }) => {
return (
    <div>
        <h1 className="text-4xl text-black font-bold mt-10 text-center">{saludo}</h1>
    </div>
)
}


ItemListContainer.propTypes = {
    saludo: PropTypes.string
  };

export default ItemListContainer