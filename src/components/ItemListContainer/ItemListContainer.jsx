import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
return (
    <div>
        <h1 className="text-4xl text-black font-bold mt-10 text-center">{greeting}</h1>
    </div>
)
}


ItemListContainer.propTypes = {
    greeting: PropTypes.string
  };

export default ItemListContainer