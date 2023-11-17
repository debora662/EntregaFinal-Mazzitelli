import axios from "axios";

const apiUrl = "https://653276fad80bd20280f59481.mockapi.io/api/productos";

const getProductById = async (Id) => {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data
    const filteredProduct = products.find(product => product.id === parseInt(Id))
    return filteredProduct || null;
  } catch (error) {
    alert("Error al obtener el producto por ID:", error);
    throw error;
  }
};

export default getProductById;