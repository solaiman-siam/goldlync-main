import useAxiosSecure from "../useAxios";
import { useQuery } from "@tanstack/react-query";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export function useGetAllPrimaryServices() {
  const axios = useAxiosSecure();

  return useQuery({
    queryKey: ["primary", "services"],
    queryFn: async () => {
      const { data } = await axios.get("/service/category");
      console.log(data.data);
      return data?.data;
    },
  });
}

export function useGetSubCategoryServices(path) {
  const axios = useAxiosSecure();

  return useQuery({
    queryKey: ["primary", "services", "subcategory", path],
    queryFn: async () => {
      const { data } = await axios.get(path);
      return data?.data;
    },
  });
}

export function useGetAllServices() {
  const axios = useAxiosSecure();

  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await axios.get("/service.json");
      if (!data?.status) {
        throw new Error(data?.message);
      }
      return data?.data;
    },
  });
}
