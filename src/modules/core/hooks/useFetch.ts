/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";
type Params = any[];

const fetcher = (...args: Params) =>
  fetch(...args)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });

export const useFetch = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};
