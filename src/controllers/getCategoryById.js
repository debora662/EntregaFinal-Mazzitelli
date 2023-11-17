import axios from "axios";

const apiUrl = "https://653276fad80bd20280f59481.mockapi.io/api/productos";

const getCategoryById = async (categoryId) => {
    try {
        const response = await axios.get(apiUrl);
        const products = response.data
        const filteredProducts = products.filter(product => product.categoria === categoryId)
        return filteredProducts
      } catch (error) {
        alert("Error al obtener los productos por ID:", error);
        throw error;
      }
}

export default getCategoryById