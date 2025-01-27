import {
  getAllPrimaryServices,
  getAllServices,
} from "@/api/services/services.service";
import useAxiosSecure from "../useAxios";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPrimaryServices() {
  const axios = useAxiosSecure();
  const fetchData = getAllPrimaryServices(axios);

  return useQuery({
    queryKey: ["primary", "services"],
    queryFn: fetchData,
  });
}

export function useGetAllServices() {
  const axios = useAxiosSecure();
  const fetchData = getAllServices(axios);

  return useQuery({
    queryKey: ["services"],
    queryFn: fetchData,
  });
}
