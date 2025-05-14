import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const getProducts = async ({ pageParam }) => {
  console.log(pageParam);
  const response = await axios.get(
    "https://fakestoreapi.com/products?cursor=" + pageParam
  );
  return response.data;
};

export const useGetProducts = () =>
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });
