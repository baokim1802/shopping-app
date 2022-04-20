import { useEffect, useState } from "react";

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({});

  useEffect(() => {
    refetch();
  }, dependencyList);

  const refetch = () => {
    setLoading(true);
    callback().then((res) => {
      // console.log("Done callback", res);
      setData(res.data);
      setPaginate(res.paginate);
      setLoading(false);
    });
  };

  return { data, loading, paginate, refetch };
};

export default useQuery;
