import axios from "axios";
const apiUrl = "https://653276fad80bd20280f59481.mockapi.io/api/productos";

const getAllProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    alert("Error al obtener los productos:", error);   
    throw error;
  }
};

export default getAllProducts;

