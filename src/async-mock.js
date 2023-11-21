import axios from "axios";

const apiUrl = "https://653276fad80bd20280f59481.mockapi.io/api/productos";

const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl);   
        const limitedProducts = response.data.slice(0, 24)    
        return limitedProducts;
    } catch (error) {
        alert("Error al obtener los productos:", error);
        throw error;
    }
}

export const getAllProducts = async () => {
    return await fetchData();
};

export const getProductById = async (itemId) => {
    const data = await fetchData();
    const filteredProduct = data.find(product => product.id === parseInt(itemId))    
    return filteredProduct || null;
};

export const getCategoryById = async (categoryId) => {
    const data = await fetchData();
    const filteredProducts = data.filter(product => product.categoria === categoryId)
    return filteredProducts;
}
