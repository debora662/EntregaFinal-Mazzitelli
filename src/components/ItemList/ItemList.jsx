import Item from "../Item/Item"

const ItemList = ({ products }) => {   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-20 my-14">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList; 