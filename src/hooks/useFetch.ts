import { useEffect, useState } from "react";

const useFetch = (api: Function) => {
  const [result, setresult] = useState();

  const fetch = async () => {
    try {
      const res = await api();
      setresult(res.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return result;
};

export default useFetch;
