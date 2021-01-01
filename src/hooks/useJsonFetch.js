import { useState, useEffect } from 'react';

export default function useJsonFetch(url, method) {
  const [posts, setPosts] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(url, { method });
        const data = await response.json();
        
        if (!response.ok) {          
          throw new Error(data.status);
        }

        setPosts((prev) => [...data]);
      } catch (e) {
        setError(e.message);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchData();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method]);

  return [posts, setPosts];
}