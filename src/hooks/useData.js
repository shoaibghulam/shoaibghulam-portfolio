import { useState, useEffect } from 'react';
import { allData } from '../services/allData'; // Adjust the path to your `alldata.js`

const useData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await allData();
                setData(result);
            } catch (err) {
                setError(err || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once

    return { data, error, loading };
};

export default useData;
