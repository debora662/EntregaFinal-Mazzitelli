import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (apiUrl) => {
    const [data, setData] = useState([]);    
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);     
                const limitedProducts = response.data.slice(0, 24);           
                setData(limitedProducts);                
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData();
    }, [apiUrl]);

    return { data, error };
}




export default useFetchData;