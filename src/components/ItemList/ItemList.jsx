import Item from "../Item/Item";
import PropTypes from 'prop-types';

const ItemList = ({products}) => {
    return (
        <div
            className="mx-20 my-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

ItemList.propTypes = {
    products: PropTypes.array
};

export default ItemList;
