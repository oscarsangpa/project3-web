import { useQuery } from "react-query";

const fetchData = async () => {
  return "COMPLETED";
};

export const useGetSearchResult = () => {
  return useQuery("getSearchResult", fetchData);
};