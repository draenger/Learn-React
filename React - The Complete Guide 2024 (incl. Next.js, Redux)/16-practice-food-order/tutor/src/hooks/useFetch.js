import { useState, useEffect } from "react";

export function useFetch(fetchFn, initialVal = null) {
  const [data, setData] = useState(initialVal);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setLoading(false);
    }

    fetch();
  }, [fetchFn]);

  return { loading, data, setData, error };
}
