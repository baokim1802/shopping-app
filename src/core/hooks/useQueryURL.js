import { useSearchParams } from "react-router-dom";
import { convertQueryURLToObject } from "../utils/url";

export const useQueryURL = () => {
  const query = useSearchParams();
  const objUrl = convertQueryURLToObject(query[0].toString());

  return objUrl;
};
