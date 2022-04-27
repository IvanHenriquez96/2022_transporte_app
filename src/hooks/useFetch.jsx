import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    axios.get(url).then((response) => setData(response.data)).catch((err) => setError(err.response)).finally(() => setIsLoading(false));

  },[url]);

  return {data, isLoading, error};
}
