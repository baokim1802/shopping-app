import { useEffect, useState } from "react";

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({});

  useEffect(() => {
    setLoading(true);
    callback().then((res) => {
      // console.log("Done callback", res);
      setData(res.data);
      setPaginate(res.paginate);
      setLoading(false);
    });
  }, dependencyList);

  return { data, loading, paginate };
};

export default useQuery;
