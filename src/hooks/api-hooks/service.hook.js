import useAxiosSecure from "../useAxios";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPrimaryServices() {
  const axios = useAxiosSecure();

  return useQuery({
    queryKey: ["primary", "services"],
    queryFn: async () => {
      const { data } = await axios.get("/primary-service.json");
      if (!data?.status) {
        throw new Error(data?.message);
      }
      return data?.data;
    },
  });
}


export function useGetSubCategoryServices() {
  const axios = useAxiosSecure();

  return useQuery({
    queryKey: ["primary", "services"],
    queryFn: async () => {
      const { data } = await axios.get("/sub-category.json");
      if (!data?.status) {
        throw new Error(data?.message);
      }
      return data?.services;
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
