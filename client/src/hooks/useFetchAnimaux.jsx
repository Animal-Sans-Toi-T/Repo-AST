import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAnimaux = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimaux = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/animals");
                const imageUrl = response.data
                    .map(animal => animal.photo)
                    .filter(adresse => adresse);
                setImages(imageUrl)
            }
            catch(error) {
                console.log(error);
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchAnimaux();
    }, []);

    return { images, loading, error };
};

export default useFetchAnimaux;