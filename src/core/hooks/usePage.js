import { useSearchParams } from "react-router-dom";
import { convertQueryURLToObject } from "../utils/url";

export const usePage = () => {
  const query = useSearchParams();
  const objUrl = convertQueryURLToObject(query[0].toString());
  const page = parseInt(objUrl.page || "1");
  return page;
};
